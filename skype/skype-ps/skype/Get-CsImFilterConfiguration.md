---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsImFilterConfiguration
schema: 2.0.0
---

# Get-CsImFilterConfiguration

## SYNOPSIS
Returns the instant messaging (IM) link filters configured in your organization.
These filters are used to prevent users from sending instant messages that contain hyperlinks with specific prefixes (for example, links with an http or telnet prefix).
Depending on your settings, this means that any Uniform Resource Identifier (URI) prefaced with one of these schemes will be converted to a non-clickable hyperlink or removed altogether.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsImFilterConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsImFilterConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsImFilterConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
When sending instant messages, users can embed a URI within the text of that message to refer other participants in the conversation to a particular web site or share.
Skype for Business Server can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and go to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Get-CsImFilterConfiguration cmdlet retrieves all the settings for filtering URIs from instant messages.
Called by itself (with no parameters), the Get-CsImFilterConfiguration cmdlet returns all URI IM filter settings, globally and for all sites.
You can also specify an Identity to show the settings for a specific site (or the global settings).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsImFilterConfiguration
```

The command shown in Example 1 returns a collection of all the IM hyperlink filters configured for use in your organization.
This is the behavior any time you call the Get-CsImFilterConfiguration cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsImFilterConfiguration -Identity site:Redmond
```

Example 2 returns settings for one IM filter: the settings that have the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

### -------------------------- Example 3 --------------------------
```
Get-CsImFilterConfiguration -Filter site:*
```

Example 3 uses the Filter parameter to return a collection of all the IM filters that have been configured at the site level.
The wildcard string site:* instructs the Get-CsImFilterConfiguration cmdlet to return only those IM filter configurations that have an Identity that begins with the string value site:.

### -------------------------- Example 4 --------------------------
```
(Get-CsImFilterConfiguration -Identity Global).Prefixes
```

In Example 4 the value of the global IM filter configuration's Prefixes property is "expanded" when displayed on the screen; this simply means that the property and its values are shown in a more user-friendly and readable format.
To perform this task, the Get-CsImFilterConfiguration cmdlet is first used to retrieve the global IM filter configuration.
(Note that the call to the Get-CsImFilterConfiguration cmdlet is enclosed in parentheses.
That tells Windows PowerShell to first carry out the command enclosed in parentheses, and then continue on from there.) After the configuration has been retrieved, the value of the Prefixes property is displayed with one prefix on each line.


## PARAMETERS

### -Identity
The unique identifier of the settings you want to retrieve.
This will be either global or site:\<site name\>, where \<site name\> is the name of the site to which these settings apply, such as site:Redmond.

Full Data Type: Microsoft.Rtc.Management.Xds.XdsIdentity

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Performs a wildcard search for configurations matching a given Identity pattern.
For example, returns all settings with identities beginning with site* (all site-specific settings).

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the IM filter configuration from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration


## NOTES


## RELATED LINKS

[New-CsImFilterConfiguration](New-CsImFilterConfiguration.md)

[Remove-CsImFilterConfiguration](Remove-CsImFilterConfiguration.md)

[Set-CsImFilterConfiguration](Set-CsImFilterConfiguration.md)

