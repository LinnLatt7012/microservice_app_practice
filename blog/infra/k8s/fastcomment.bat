kubectl apply -f event-bus-depl.yaml -f comments-depl.yaml -f comments-srv.yaml -f moderation-depl.yaml -f posts-depl.yaml -f posts-srv.yaml -f query-depl.yaml -f client-depl.yaml -f ingress-srv.yaml 
kubectl apply -f event-bus-depl.yaml -f comments-depl.yaml -f moderation-depl.yaml -f posts-depl.yaml-f query-depl.yaml -f client-depl.yaml -f ingress-srv.yaml 

kubectl delete deployments comments-depl event-bus-depl moderation-depl posts-depl query-depl
kubectl delete deployments comments-depl event-bus-depl moderation-depl posts-depl query-depl client-depl

ingress-nginx 

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission