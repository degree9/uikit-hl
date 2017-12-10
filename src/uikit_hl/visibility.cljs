(ns uikit-hl.visibility
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-invisible* nil)

(def ^:dynamic *uk-hidden-s*  nil)
(def ^:dynamic *uk-hidden-m*  nil)
(def ^:dynamic *uk-hidden-l*  nil)
(def ^:dynamic *uk-hidden-xl* nil)

(def ^:dynamic *uk-visible-s*  nil)
(def ^:dynamic *uk-visible-m*  nil)
(def ^:dynamic *uk-visible-l*  nil)
(def ^:dynamic *uk-visible-xl* nil)

(defmethod hl/do! :uk-invisible
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-invisible v}))

(defmethod hl/do! :uk-hidden-s
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-hidden@s") v}))

(defmethod hl/do! :uk-hidden-m
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-hidden@m") v}))

(defmethod hl/do! :uk-hidden-l
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-hidden@l") v}))

(defmethod hl/do! :uk-hidden-xl
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-hidden@xl") v}))

(hl/defelem hidden [attr kids]
  (let [hidden-s  (:small  attr *uk-hidden-s*)
        hidden-m  (:medium attr *uk-hidden-m*)
        hidden-l  (:large  attr *uk-hidden-l*)
        hidden-xl (:xlarge attr *uk-hidden-xl*)]
    (hl/div attr
      :uk-hidden-s  hidden-s
      :uk-hidden-m  hidden-m
      :uk-hidden-l  hidden-l
      :uk-hidden-xl hidden-xl
      kids)))

(defmethod hl/do! :uk-visible-s
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-visible@s") v}))

(defmethod hl/do! :uk-visible-m
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-visible@m") v}))

(defmethod hl/do! :uk-visible-l
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-visible@l") v}))

(defmethod hl/do! :uk-visible-xl
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-visible@xl") v}))

(hl/defelem visible [attr kids]
  (let [visible-s  (:small  attr *uk-visible-s*)
        visible-m  (:medium attr *uk-visible-m*)
        visible-l  (:large  attr *uk-visible-l*)
        visible-xl (:xlarge attr *uk-visible-xl*)]
    (hl/div attr
      :uk-visible-s  visible-s
      :uk-visible-m  visible-m
      :uk-visible-l  visible-l
      :uk-visible-xl visible-xl
      kids)))
