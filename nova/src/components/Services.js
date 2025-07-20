import React from 'react';
import './Css/Services.css';

const Services = () => {
    return (

       
            <section class="bg-light py-5 py-xl-6">
                <div class="container mb-5 mb-md-6">
                    <div class="row justify-content-md-center">
                        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 class="mb-4 display-5">Services</h2>
                            <p class="text-secondary mb-4 mb-md-5"></p>
                            <hr class="w-50 mx-auto mb-0 text-secondary"/>
                        </div>
                    </div>
                </div>
                <div class="container overflow-hidden">
                    <div class="row gy-5 gy-md-6 gx-xl-6">
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-1-circle-fill text-primary mb-4" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            <h5 class="m-2">Qualitative Data Analysis</h5>
                            <p class="m-0 text-secondary">Qualitative data analysis is a crucial tool in the public health field, as it allows us to gain deep insights into the perspectives, experiences, and opinions of individuals and communities.
                               
</p>
                        </div>

                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-2-circle-fill text-primary mb-4" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                            <h5 class="m-2">Project Management</h5>
                            <p class="m-0 text-secondary">Management consulting is a professional service provided to organizations seeking to improve their overall performance or solve specific problems. We cover a wide range of services, including strategic planning, organizational design, process improvement, and performance management.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-3-circle-fill text-primary mb-4" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                            <h5 class="m-2">Program Evaluation</h5>
                            <p class="m-0 text-secondary">Public health consultants can evaluate the effectiveness of existing public health programs and recommend improvements to ensure that they are meeting their goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Services;