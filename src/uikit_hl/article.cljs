(ns uikit-hl.article
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-article! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-article! elem key val))

(defn- format-article [article]
  (str "uk-article-" article))

(defmethod uk-article! ::default
  [elem kw v]
  (h/do! elem :class {(format-article (name kw)) v}))

(defmethod uk-article! ::article
  [elem kw v]
  (h/do! elem :class {:uk-article v}))

(h/defelem article [{:keys [article] :as attr} kids]
  (h/div
    (dissoc attr :article)
    ::article article
    kids))

(h/defelem title [attr kids]
  (h/div attr ::title true kids))

(h/defelem meta [attr kids]
  (h/div attr ::meta true kids))
