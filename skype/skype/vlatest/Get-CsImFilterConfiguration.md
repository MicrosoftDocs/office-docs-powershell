---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsImFilterConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns the instant messaging (IM) link filters configured in your organization.
These filters are used to prevent users from sending instant messages that contain hyperlinks with specific prefixes (for example, links with an http or telnet prefix).
Depending on your settings, this means that any Uniform Resource Identifier (URI) prefaced with one of these schemes will be converted to a non-clickable hyperlink or removed altogether.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns the instant messaging (IM) link filters configured in your organization.
These filters are used to prevent users from sending instant messages that contain hyperlinks with specific prefixes (for example, links with an http or telnet prefix).
Depending on your settings, this means that any Uniform Resource Identifier (URI) prefaced with one of these schemes will be converted to a non-clickable hyperlink or removed altogether.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsImFilterConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsImFilterConfiguration \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]



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
**Below Content Applies To:** Lync Server 2010

When sending instant messages, users can embed a URI within the text of that message to refer other participants in the conversation to a particular web site or share.
Microsoft Lync Server 2010 can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click on the link and be taken to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Get-CsImFilterConfiguration cmdlet retrieves all the settings for filtering URIs from instant messages.
Called by itself (with no parameters), Get-CsImFilterConfiguration returns all URI IM filter settings, globally and for all sites.
You can also specify an Identity to show the settings for a specific site (or the global settings).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsImFilterConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsImFilterConfiguration"}

**Below Content Applies To:** Lync Server 2013

When sending instant messages, users can embed a URI within the text of that message to refer other participants in the conversation to a particular web site or share.
Lync Server can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and go to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Get-CsImFilterConfiguration cmdlet retrieves all the settings for filtering URIs from instant messages.
Called by itself (with no parameters), Get-CsImFilterConfiguration returns all URI IM filter settings, globally and for all sites.
You can also specify an Identity to show the settings for a specific site (or the global settings).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsImFilterConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsImFilterConfiguration"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

When sending instant messages, users can embed a URI within the text of that message to refer other participants in the conversation to a particular web site or share.
Skype for Business Server 2015 can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and go to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Get-CsImFilterConfiguration cmdlet retrieves all the settings for filtering URIs from instant messages.
Called by itself (with no parameters), the Get-CsImFilterConfiguration cmdlet returns all URI IM filter settings, globally and for all sites.
You can also specify an Identity to show the settings for a specific site (or the global settings).



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsImFilterConfiguration
```

The command shown above returns a collection of all the IM hyperlink filters configured for use in your organization.
This is the behavior any time you call Get-CsImFilterConfiguration without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the IM hyperlink filters configured for use in your organization.
This is the behavior any time you call Get-CsImFilterConfiguration without any additional parameters.

Get-CsImFilterConfiguration

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the IM hyperlink filters configured for use in your organization.
This is the behavior any time you call the Get-CsImFilterConfiguration cmdlet without any additional parameters.

Get-CsImFilterConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsImFilterConfiguration -Identity site:Redmond
```

The preceding example returns settings for one IM filter: the settings that have the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns settings for one IM filter: the settings that have the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

Get-CsImFilterConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns settings for one IM filter: the settings that have the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

Get-CsImFilterConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsImFilterConfiguration -Filter site:*
```

Example 3 uses the Filter parameter to return a collection of all the IM filters that have been configured at the site level.
The wildcard string site:* instructs Get-CsImFilterConfiguration to return only those IM filter configurations that have an Identity that begins with the string value site:.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the Filter parameter to return a collection of all the IM filters that have been configured at the site level.
The wildcard string site:* instructs Get-CsImFilterConfiguration to return only those IM filter configurations that have an Identity that begins with the string value site:.

Get-CsImFilterConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Filter parameter to return a collection of all the IM filters that have been configured at the site level.
The wildcard string site:* instructs the Get-CsImFilterConfiguration cmdlet to return only those IM filter configurations that have an Identity that begins with the string value site:.

Get-CsImFilterConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
(Get-CsImFilterConfiguration -Identity Global).Prefixes
```

In Example 4 the value of the global IM filter configuration's Prefixes property is "expanded" when displayed on the screen; this simply means that the property and its values are shown in a more user-friendly and readable format.
To perform this task, Get-CsImFilterConfiguration is first used to retrieve the global IM filter configuration.
(Note that the call to Get-CsImFilterConfiguration is enclosed in parentheses.
That tells Windows PowerShell to first carry out the command enclosed in parentheses, and then continue on from there.) After the configuration has been retrieved, the value of the Prefixes property is displayed with one prefix on each line.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4 the value of the global IM filter configuration's Prefixes property is "expanded" when displayed on the screen; this simply means that the property and its values are shown in a more user-friendly and readable format.
To perform this task, Get-CsImFilterConfiguration is first used to retrieve the global IM filter configuration.
(Note that the call to Get-CsImFilterConfiguration is enclosed in parentheses.
That tells Windows PowerShell to first carry out the command enclosed in parentheses, and then continue on from there.) After the configuration has been retrieved, the value of the Prefixes property is displayed with one prefix on each line.

(Get-CsImFilterConfiguration -Identity Global).Prefixes

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4 the value of the global IM filter configuration's Prefixes property is "expanded" when displayed on the screen; this simply means that the property and its values are shown in a more user-friendly and readable format.
To perform this task, the Get-CsImFilterConfiguration cmdlet is first used to retrieve the global IM filter configuration.
(Note that the call to the Get-CsImFilterConfiguration cmdlet is enclosed in parentheses.
That tells Windows PowerShell to first carry out the command enclosed in parentheses, and then continue on from there.) After the configuration has been retrieved, the value of the Prefixes property is displayed with one prefix on each line.

(Get-CsImFilterConfiguration -Identity Global).Prefixes

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The unique identifier of the settings you want to retrieve.
This will be either global or site:\<site name\>, where \<site name\> is the name of the site to which these settings apply, such as site:Redmond.

Full Data Type: Microsoft.Rtc.Management.Xds.XdsIdentity



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Performs a wildcard search for configurations matching a given Identity pattern.
For example, returns all settings with identities beginning with site* (all site-specific settings).



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Retrieves the IM filter configuration from the local replica of the Central Management store, rather than the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

###  
None.

### None

## OUTPUTS

###  
Get-CsImFilterConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration object.

### System.Object

###  
The Get-CsImFilterConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/de9b24a1-8d17-4da1-89c2-db5b532674eb(OCS.14).aspx)

[New-CsImFilterConfiguration]()

[Remove-CsImFilterConfiguration]()

[Set-CsImFilterConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/de9b24a1-8d17-4da1-89c2-db5b532674eb(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/de9b24a1-8d17-4da1-89c2-db5b532674eb(OCS.16).aspx)

