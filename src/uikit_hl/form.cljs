(ns uikit-hl.form
  (:refer-clojure :exclude [range])
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defn- format-form [form]
  (str "uk-form-" form))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-form (name kw)) v}))

(h/defelem form [{:keys [stacked horizontal] :as attr} kids]
  (h/form
    (dissoc attr :stacked :horizontal)
    ::stacked stacked
    ::horizontal horizontal
    kids))

(h/defelem icon [{:keys [flip] :as attr} kids]
  (h/span
    (dissoc attr :flip)
    ::icon true
    ::icon-flip flip
    kids))

(h/defelem label [attr kids]
  (h/label
    attr
    ::label true
    kids))

(defmethod h/do! ::input
  [elem kw v]
  (h/do! elem :class {:uk-input v}))

(h/defelem input [attr kids]
  (h/input
    attr
    ::input true
    kids))

(defmethod h/do! ::textarea
  [elem kw v]
  (h/do! elem :class {:uk-textarea v}))

(h/defelem textarea [attr kids]
  (h/textarea
    attr
    ::textarea true
    kids))

(defmethod h/do! ::fieldset
  [elem kw v]
  (h/do! elem :class {:uk-fieldset v}))

(h/defelem fieldset [attr kids]
  (h/fieldset
    attr
    ::fieldset true
    kids))

(defmethod h/do! ::legend
  [elem kw v]
  (h/do! elem :class {:uk-legend v}))

(h/defelem legend [attr kids]
  (h/legend
    attr
    ::legend true
    kids))

(defmethod h/do! ::checkbox
  [elem kw v]
  (h/do! elem :class {:uk-checkbox v}))

(h/defelem checkbox [attr kids]
  (h/label
    (h/input
      attr
      :type "checkbox"
      ::checkbox true)
    kids))

(defmethod h/do! ::range
  [elem kw v]
  (h/do! elem :class {:uk-range v}))

(h/defelem range [attr kids]
  (h/label
    (h/input
      attr
      :type "range"
      ::range true)
    kids))

(defmethod h/do! ::radio
  [elem kw v]
  (h/do! elem :class {:uk-radio v}))

(h/defelem radio [attr kids]
  (h/label
    (h/input
      attr
      :type "radio"
      ::radio true)
    kids))

(defmethod h/do! ::select
  [elem kw v]
  (h/do! elem :class {:uk-select v}))

(h/defelem select [attr kids]
  (h/select
    attr
    ::select true
    kids))

(def option h/option)

(defmethod h/do! ::custom
  [elem _ v]
  (.formCustom uk/uikit elem (clj->js v)))
