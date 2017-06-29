(ns uikit-hl.core
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [cljsjs.uikit]))

(def include-css #(hl/link :rel "stylesheet" :href "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/css/uikit.min.css"))

(defn assoc-class [attr & [pre post]]
  (let [class (:class attr)]
    (assoc attr :class (j/cell= (merge pre (hl/normalize-class class) post)))))

(defn if-assoc [pred map k1 v1 k2 v2]
  (if pred
    (assoc map k1 v1)
    (assoc map k2 v2)))

(defn select-class
  ([class clist]
    (select-class {} class clist))
  ([map class clist]
    (reduce #(if-assoc (= %2 class) %1 %2 true %2 false) map clist)))

(defmethod hl/do! :uikit/update
  [elem _ v]
  (when v
    (.$update elem)))

(defn class= [class]
  (j/cell= (hl/normalize-class class)))

(hl/defelem extelem [attr kids]
  (let [extend (:extend attr hl/div)
        attr   (dissoc  attr :extend)]
    (extend attr kids)))
