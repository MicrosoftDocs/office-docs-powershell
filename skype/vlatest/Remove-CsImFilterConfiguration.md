---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsImFilterConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes the specified instant messaging (IM) filter configuration.
(IM filter settings are used to prevent users from sending instant messages that contain hyperlinks.)

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes the specified instant messaging (IM) filter configuration.
(IM filter settings are used to prevent users from sending instant messages that contain hyperlinks.) This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsImFilterConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When sending instant messages, users can embed a Uniform Resource Identifier (URI) within the text of that message to refer other participants in the conversation to a particular web site or share.
Microsoft Lync Server 2010 can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click on the link and be taken to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Remove-CsImFilterConfiguration cmdlet removes the IM filter configuration for a specified identity (such as a specific site).
Running this cmdlet against the Global identity will simply reset the global configuration to the default settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsImFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsImFilterConfiguration"}

Below Content Applies To: Lync Server 2013

When sending instant messages, users can embed a Uniform Resource Identifier (URI) within the text of that message to refer other participants in the conversation to a particular website or share.
Lync Server can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and be taken to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Remove-CsImFilterConfiguration cmdlet removes the IM filter configuration for a specified identity (such as a specific site).
Running this cmdlet against the Global identity will simply reset the global configuration to the default settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsImFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsImFilterConfiguration"}

Below Content Applies To: Skype for Business Server 2015

When sending instant messages, users can embed a Uniform Resource Identifier (URI) within the text of that message to refer other participants in the conversation to a particular website or share.
Skype for Business Server 2015 can be configured so that hyperlinks with certain prefixes are blocked or are not active.
(In other words, the participants can't simply click the link and be taken to the site the URI refers to; they must copy and paste the link manually into a browser.)

The Remove-CsImFilterConfiguration cmdlet removes the IM filter configuration for a specified identity (such as a specific site).
Running this cmdlet against the Global identity will simply reset the global configuration to the default settings.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsImFilterConfiguration -Identity site:Redmond
```

In Example 1, Remove-CsImFilterConfiguration is used to remove the IM filter configuration with the Identity site:Redmond.
When an IM filter configuration is removed from a site, that site will automatically begin using the global settings in its place.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Remove-CsImFilterConfiguration is used to remove the IM filter configuration with the Identity site:Redmond.
When an IM filter configuration is removed from a site, that site will automatically begin using the global settings in its place.

Remove-CsImFilterConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Remove-CsImFilterConfiguration cmdlet is used to remove the IM filter configuration with the Identity site:Redmond.
When an IM filter configuration is removed from a site, that site will automatically begin using the global settings in its place.

Remove-CsImFilterConfiguration -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsImFilterConfiguration -Filter site:* | Remove-CsImFilterConfiguration
```

In Example 2, all the IM filter configurations at the site scope are removed.
To carry out this task, the command first uses Get-CsImFilterConfiguration and the Filter parameter to return all the configurations at the site scope; the wildcard string site:* tells Get-CsImFilterConfiguration to return only those configurations that have an Identity that begins with the string value site:.
The filtered collection of configurations is then piped to Remove-CsImFilterConfiguration, which deletes each configuration in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the IM filter configurations at the site scope are removed.
To carry out this task, the command first uses Get-CsImFilterConfiguration and the Filter parameter to return all the configurations at the site scope; the wildcard string site:* tells Get-CsImFilterConfiguration to return only those configurations that have an Identity that begins with the string value site:.
The filtered collection of configurations is then piped to Remove-CsImFilterConfiguration, which deletes each configuration in the collection.

Get-CsImFilterConfiguration -Filter site:* | Remove-CsImFilterConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the IM filter configurations at the site scope are removed.
To carry out this task, the command first uses the Get-CsImFilterConfiguration cmdlet and the Filter parameter to return all the configurations at the site scope; the wildcard string site:* tells the Get-CsImFilterConfiguration cmdlet to return only those configurations that have an Identity that begins with the string value site:.
The filtered collection of configurations is then piped to the Remove-CsImFilterConfiguration cmdlet, which deletes each configuration in the collection.

Get-CsImFilterConfiguration -Filter site:* | Remove-CsImFilterConfiguration

## PARAMETERS

### -Identity
The unique identity of the configuration to be removed.
This will be either Global or Site:\<site name\> (where \<site name\> represents the name of the site to which the settings apply).

Full Data Type: Microsoft.Rtc.Management.Xds.XdsIdentity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.ImFilterConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0c6f5f69-ae41-46d6-b817-fa1c6751c615(OCS.14).aspx)

[New-CsImFilterConfiguration]()

[Set-CsImFilterConfiguration]()

[Get-CsImFilterConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/0c6f5f69-ae41-46d6-b817-fa1c6751c615(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0c6f5f69-ae41-46d6-b817-fa1c6751c615(OCS.16).aspx)

