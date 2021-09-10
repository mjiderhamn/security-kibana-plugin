FROM amazon/opendistro-for-elasticsearch-kibana:1.13.2

ADD opendistroSecurityKibana-7.10.2.zip /tmp

RUN rm -Rf /usr/share/kibana/plugins/opendistroSecurityKibana
RUN /usr/share/kibana/bin/kibana-plugin install file:///tmp/opendistroSecurityKibana-7.10.2.zip

# RUN sudo yum install unzip && unzip /tmp/opendistroSecurityKibana-7.10.2.zip /usr/share/kibana/plugins/opendistroSecurityKibana