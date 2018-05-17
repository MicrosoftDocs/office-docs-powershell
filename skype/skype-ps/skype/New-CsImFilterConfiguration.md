---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsImFilterConfiguration
schema: 2.0.0
---

# New-CsImFilterConfiguration

## SYNOPSIS
Creates a new instant messaging (IM) filter configuration.
IM filters are used to prevent users from sending instant messages that contain active hyperlinks.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsImFilterConfiguration [-Identity] <XdsIdentity> [-Action <UrlFilterAction>] [-AllowMessage <String>]
 [-BlockFileExtension <Boolean>] [-Enabled <Boolean>] [-IgnoreLocal <Boolean>] [-Prefixes <PSListModifier>]
 [-WarnMessage <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

When sending instant messages, users can embed a Uniform Resource Identifier (URI) within the text of that message to refer other participants in the conversation to a particular website or share.
Skype for Business Server can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and be taken to the site the URI refers to; they must copy and paste the link manually into a browser.)

The New-CsImFilterConfiguration cmdlet allows you to define a list of URI prefixes that will be filtered, in addition to enabling and disabling filtering altogether, within a specific site.
Calling the New-CsImFilterConfiguration cmdlet with only an Identity specified will create a new configuration with that identity, populating the Prefixes list for that site with a set of default prefixes that will be filtered.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsImFilterConfiguration -Identity site:Redmond
```

In Example 1, the New-CsImFilterConfiguration cmdlet is used to create a new IM filter configuration with the Identity site:Redmond.
(Because no additional parameters were specified, these settings will be created using the default values.)



### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsImFilterConfiguration -Identity site:Redmond -Prefixes @{add="rtsp:","urn:"}
```

In this command, the New-CsImFilterConfiguration cmdlet is used to create a new IM filter configuration with the Identity site:Redmond.
Because the Prefixes parameter has been specified, the new configuration will contain all the default values--including the default prefixes to filter--plus two additional URI prefixes: rtsp: and urn:.
We add these prefixes by using the add list modifier to add these prefixes to the default list.


### -------------------------- EXAMPLE 3 -------------------------- 
```
New-CsImFilterConfiguration -Identity site:Redmond -Prefixes @{replace="rtsp:","urn:"}
```

In this command, the New-CsFileTransferFilterConfiguration cmdlet is used to create a new IM filter configuration with the Identity site:Redmond.
This example is similar to Example 2 except that the replace list modifier has been used instead of the add list modifier.
This means that all the default URI prefixes will be replaced by these two prefixes (rtsp: and urn:).
Therefore, only URIs with prefixes of rtsp: or urn: will be filtered within instant messages for the site Redmond.



## PARAMETERS

### -Identity
A unique identifier specifying the scope of the IM filter configuration.
Global settings exist by default and cannot be re-created with the New-CsImFilterConfiguration cmdlet, but you can create site-level settings by specifying an Identity of site:\<site name\>, where \<site name\> is the name of the site to which the settings will be applied (for example, site:Redmond).

Full Data Type: Microsoft.Rtc.Management.Xds.XdsIdentity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action

The value of this parameter determines the action that will be taken when a hyperlink is included in an instant message:

Allow - Hyperlinks are prefixed with an underscore so that the links are no longer active.
If a message is specified in the AllowMessage property, that message will be inserted at the beginning of each instant message containing hyperlinks.

Block - Delivery of messages containing active hyperlinks are blocked and Skype for Business Server sends an error message to the sender.

Warn - Messages containing active hyperlinks are delivered to the receiving participants, along with a warning message that is inserted at the beginning of those messages.
The warning message can be specified using the WarnMessage property.
If Warn is specified and no WarnMessage is entered, IM filtering is disabled, although the settings for the BlockFileExtension property will still be honored.

Default: Allow, unless a message contains more than 1,000 URLs, in which case the default is Block.

Full Data Type: Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.UrlFilterAction



```yaml
Type: UrlFilterAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMessage
If a value is specified for this parameter, that string is inserted at the beginning of each message containing hyperlinks when the value of the Action property is set to Allow.
You can use this message to notify users of things such as the potential dangers of clicking unknown links, or your organization's relevant policies and requirements.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockFileExtension
If this parameter is set to True, a hyperlink that contains a file path with an extension specified by the Extensions property defined in the applicable file transfer filter configuration (retrieved by calling the Get-CsFileTransferFilterConfiguration cmdlet) is blocked and an error message is returned to the sender.
If this parameter is set to False, no special check is made for file extensions.

Default: True

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Enables or disables this feature.
If this parameter is set to True, instant messages will be scanned for hyperlinks and the rules in this configuration will be applied.
If this parameter is set to False, messages will not be checked for hyperlinks.

Default: True

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreLocal
The value of this parameter controls whether filtering is performed on local Intranet URIs passed in instant messages.If this parameter is set to True, any URI that is defined in the Intranet zone of the local computer is ignored.
(The local computer is the Front End Server running the IM Filter application.) If this parameter is set to False, the specified filtering is applied to all hyperlinks.

Default: True

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prefixes
The list of URI prefixes that will be filtered.
Any hyperlink included in an instant message with a prefix matching one of the prefixes in this list will be filtered according to the specified settings.

Default: callto:, file:, ftp., ftp:, gopher:, href, http:, https:, ldap:, mailto:, news:, nntp:, sip:, sips:, tel:, telnet:, www*.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WarnMessage
This parameter contains the warning message that is inserted at the beginning of each instant message that contains hyperlinks when the value of the Action property is set to Warn.
Typically this message would be used for such things as stating the potential dangers of clicking unknown links, or referring to your organization's relevant policies and requirements.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration.

## NOTES

## RELATED LINKS

[Remove-CsImFilterConfiguration](Remove-CsImFilterConfiguration.md)

[Set-CsImFilterConfiguration](Set-CsImFilterConfiguration.md)

[Get-CsImFilterConfiguration](Get-CsImFilterConfiguration.md)
