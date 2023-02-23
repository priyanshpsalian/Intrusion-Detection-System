import React,{Component} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';

import big1 from '../../../../images/big/img1.jpg';
import big2 from '../../../../images/big/img2.jpg';
import big3 from '../../../../images/big/img3.jpg';
import big4 from '../../../../images/big/img4.jpg';
import big5 from '../../../../images/big/img5.jpg';
import big6 from '../../../../images/big/img6.jpg';
import big7 from '../../../../images/big/img7.jpg';
import big8 from '../../../../images/big/img8.jpg';

const lightGallery = [
	{ thumb : big1, large :	big1,	},	
	{ thumb : big2, large :	big2,	},	
	{ thumb : big3, large :	big3,	},	
	{ thumb : big4, large :	big4,	},	
	{ thumb : big5, large :	big5,	},	
	{ thumb : big6, large :	big6,	},	
	{ thumb : big7, large :	big7,	},	
	{ thumb : big8, large :	big8,	},	
];

class Lightgallery extends Component{
	render(){
		return(
			<>	
				<SimpleReactLightbox>
					<SRLWrapper>
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title">Light Gallery</h4>
									</div>
									<div className="card-body pb-1">
										<div id="lightgallery" className="row">
											{lightGallery.map((item,index)=>(
												<a href={item.large} data-exthumbimage="images/big/img1.jpg" data-src={big1} className="col-lg-3 col-md-6 mb-4" key={index}>
													<img src={item.thumb} style={{width:"100%"}} alt="gallery"/>
												</a>
											))}
										</div>
									</div>
								</div>
								{/* <!-- /# card --> */}
							</div>
						</div>
					</SRLWrapper>
				</SimpleReactLightbox>
			</>
		)
	}
}
export default Lightgallery;