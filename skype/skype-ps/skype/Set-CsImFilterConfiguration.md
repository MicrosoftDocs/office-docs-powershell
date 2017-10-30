---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsImFilterConfiguration
schema: 2.0.0
---

# Set-CsImFilterConfiguration

## SYNOPSIS
Modifies an existing instant messaging (IM) filter configuration.
IM filter settings are used to prevent users from sending instant messages that contain live (clickable) hyperlinks.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsImFilterConfiguration [[-Identity] <XdsIdentity>] [-Action <UrlFilterAction>] [-AllowMessage <String>]
 [-BlockFileExtension <Boolean>] [-Enabled <Boolean>] [-IgnoreLocal <Boolean>] [-Prefixes <PSListModifier>]
 [-WarnMessage <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsImFilterConfiguration [-Instance <PSObject>] [-Action <UrlFilterAction>] [-AllowMessage <String>]
 [-BlockFileExtension <Boolean>] [-Enabled <Boolean>] [-IgnoreLocal <Boolean>] [-Prefixes <PSListModifier>]
 [-WarnMessage <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When sending instant messages, users can embed a Uniform Resource Identifier (URI) within the text of that message to refer other participants in the conversation to a particular web site or share.
Skype for Business Server can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and go to the site the URI refers to; they must copy and paste the link manually into a browser.)

The `Set-CsImFilterConfiguration` cmdlet allows you to modify a list of URI prefixes that will be filtered, in addition to enabling and disabling filtering altogether, either globally or within a specific site.
With this cmdlet you can also update various messages that provide warnings to users.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsImFilterConfiguration -Identity site:Redmond -Enabled $False
```

The command shown in this example disables URI filtering for the IM filter configuration with the Identity site:Redmond.
To carry out this task, the Enabled parameter is specified in the call to the `Set-CsImFilterConfiguration` cmdlet with a value of $False.


### -------------------------- Example 2 --------------------------
```
$x = Get-CsImFilterConfiguration -Identity site:Redmond

$x.Prefixes.Add("urn:")

Set-CsImFilterConfiguration -Instance $x
```

Example 2 adds a new URI prefix (urn:) to the list of prefixes prohibited by the IM filter configuration for site:Redmond.
To add the new prefix, the `Get-CsImFilterConfiguration` cmdlet is used to retrieve the configuration for site:Redmond; the returned object representing that configuration is stored in a variable named $x.
After the settings have been retrieved, the Add() method is called in line 2 to add urn: to the set of prefixes stored in the Prefixes property.
This changes the value of the object reference $x.
To change the actual configuration itself, line 3 calls the `Set-CsImFilterConfiguration` cmdlet, passing $x as the sole parameter value.


### -------------------------- Example 3 --------------------------
```
Set-CsImFilterConfiguration -Identity site:Redmond -Prefixes @{add="urn:"}
```

Example 3 performs the exact same action as Example 2, but it does it in one line.
In this command the Prefixes parameter of the `Set-CsImFilterConfiguration` cmdlet is used to add urn: to the list of prefixes.
The add list modifier is used to add this value to the Prefixes list.


### -------------------------- Example 4 --------------------------
```
Set-CsImFilterConfiguration -Identity site:Redmond -Prefixes @{remove="urn:"}
```

In this example the prefix urn: is removed from the list of prefixes blocked by the IM filter configuration for site:Redmond.
This example is identical to Example 3 except that rather than calling the add list modifier to add a prefix to the list, the remove modifier is called to remove a prefix.


## PARAMETERS

### -Identity
The unique identifier of the IM filter configuration settings you want to modify.
This value will either be global or site:\<site name\>, where \<site name\> is the site to which the configuration applies, such as site:Redmond.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This cmdlet accepts an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration, which can be retrieved by calling the `Get-CsImFilterConfiguration` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Action
The value of this parameter determines the action that will be taken when a hyperlink is included in an instant message:

Allow - Hyperlinks are prefixed with an underscore so that the links are no longer active.
In addition, if a message is specified in the AllowMessage property a notification message will be inserted at the beginning of each instant message containing hyperlinks.

Block - Delivery of messages containing active hyperlinks are blocked and Skype for Business Server sends an error message to the sender.

Warn - Messages containing active hyperlinks are delivered to the receiving participants, along with a warning message that is inserted at the beginning of those messages.
The warning message can be specified using the WarnMessage property.
If Warn is specified and no WarnMessage is entered, IM filtering is disabled, although the settings for the BlockFileExtension property will still be honored.


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
You can use this message to notify users of things such as the potential dangers of clicking unknown links or your organization's relevant policies and requirements.

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
If this parameter is set to True, a hyperlink that contains a file path with an extension specified by the Extensions property defined in the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration class (retrieved by calling the `Get-CsFileTransferFilterConfiguration` cmdlet) is blocked and an error message is returned to the sender.
If this parameter is set to False, no special check is made for file paths and extensions.

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
Typically this message would be used for such things as stating the potential dangers of clicking unknown links or referring to your organization's relevant policies and requirements.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration object.
Accepts pipelined input of IM filter configuration objects.

## OUTPUTS

###  
The `Set-CsImFilterConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration object.

## NOTES

## RELATED LINKS

[New-CsImFilterConfiguration](New-CsImFilterConfiguration.md)

[Remove-CsImFilterConfiguration](Remove-CsImFilterConfiguration.md)

[Get-CsImFilterConfiguration](Get-CsImFilterConfiguration.md)
