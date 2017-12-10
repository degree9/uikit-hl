(ns uikit-hl.article
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *title* "")
(def ^:dynamic *meta* "")

(hl/defelem article [attr kids]
  (let [title (:title attr *title*)
        meta  (:meta attr *meta*)
        attr  (-> attr (dissoc :title :meta) (assoc :class [:uk-article]))]
    (hl/article attr
      (hl/h1 :class [:uk-article-title] title)
      (hl/p :class [:uk-article-meta] meta)
      (hl/p kids))))
