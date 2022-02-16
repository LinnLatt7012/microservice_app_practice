kubectl apply -f event-bus-depl.yaml -f comments-depl.yaml -f comments-srv.yaml -f moderation-depl.yaml -f posts-depl.yaml -f posts-srv.yaml -f query-depl.yaml 

kubectl delete developments comments-depl event-bus-depl moderation-depl posts-depl query-depl

ingress-nginx 

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
