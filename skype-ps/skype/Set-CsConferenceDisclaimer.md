---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsConferenceDisclaimer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies the property values of the conference disclaimer used in your organization.
The conference disclaimer is a message displayed to users who join a conference by using a hyperlink (for example, by pasting a link to the conference into a browser such as Windows Internet Explorer).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies the property values of the conference disclaimer used in your organization.
The conference disclaimer is a message displayed to users who join a conference by using a hyperlink (for example, by pasting a link to the conference into a browser such as Windows Internet Explorer).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsConferenceDisclaimer [[-Identity] <XdsIdentity>] [-Body <String>] [-Header <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsConferenceDisclaimer [-Instance <PSObject>] [-Body <String>] [-Header <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when they join conferences hosted by Microsoft Lync Server 2010.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note, however, that this disclaimer is only shown to users who join a conference by using a hyperlink.

Lync Server 2010 allows for a single, global instance of the conference disclaimer.
The Set-CsConferenceDisclaimer cmdlet enables you to modify the conference disclaimer used in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConferenceDisclaimer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsConferenceDisclaimer"}

**Below Content Applies To:** Lync Server 2013

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when they join conferences hosted by Lync Server.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note, however, that this disclaimer is only shown to users who join a conference by using a hyperlink.

Lync Server allows for a single, global instance of the conference disclaimer.
The Set-CsConferenceDisclaimer cmdlet enables you to modify the conference disclaimer used in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConferenceDisclaimer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsConferenceDisclaimer"}

**Below Content Applies To:** Skype for Business Server 2015

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when they join conferences hosted by Skype for Business Server 2015.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note, however, that this disclaimer is only shown to users who join a conference by using a hyperlink.

Skype for Business Server 2015 allows for a single, global instance of the conference disclaimer.
The Set-CsConferenceDisclaimer cmdlet enables you to modify the conference disclaimer used in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsConferenceDisclaimer -Header "Litwareinc.com Online Conference" -Body "Important note: Conferencing proceedings are recorded and archived."
```

The command shown in Example 1 modifies both the Header and Body properties for your organization's conference disclaimer.
Because you can have only one such disclaimer, you do not need to specify the Identity when running the Set-CsConferenceDisclaimer cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies both the Header and Body properties for your organization's conference disclaimer.
Because you can have only one such disclaimer, you do not need to specify the Identity when running the Set-CsConferenceDisclaimer cmdlet.

Set-CsConferenceDisclaimer -Header "Litwareinc.com Online Conference" -Body "Important note: Conferencing proceedings are recorded and archived."

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies both the Header and Body properties for your organization's conference disclaimer.
Because you can have only one such disclaimer, you do not need to specify the Identity when running the Set-CsConferenceDisclaimer cmdlet.

Set-CsConferenceDisclaimer -Header "Litwareinc.com Online Conference" -Body "Important note: Conferencing proceedings are recorded and archived."

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique Identity of the conference disclaimer.
Because you can only have a single, global instance of the conference disclaimer, you do not need to specify an Identity when calling Set-CsConferenceDisclaimer.
However, you can use the following syntax to reference the global disclaimer: -Identity global.



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the conference disclaimer.
Because you can only have a single, global instance of the conference disclaimer, you do not need to specify an Identity when calling the Set-CsConferenceDisclaimer cmdlet.
However, you can use the following syntax to reference the global disclaimer: -Identity global.



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

### -Body
Contents of the conference disclaimer.

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

### -Header
Title given the conference disclaimer.

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
Suppresses the display of any non-fatal error message that might occur when running the command.

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
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.
Set-CsConferenceDisclaimer accepts pipelined input of conference disclaimer objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.
The Set-CsConferenceDisclaimer cmdlet accepts pipelined input of conference disclaimer objects.

## OUTPUTS

###  
Set-CsConferenceDisclaimer does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.

###  
The Set-CsConferenceDisclaimer cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/97afce6d-b031-466d-a170-3ca50d6df245(OCS.14).aspx)

[Get-CsConferenceDisclaimer]()

[Remove-CsConferenceDisclaimer]()

[Online Version](http://technet.microsoft.com/EN-US/library/97afce6d-b031-466d-a170-3ca50d6df245(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/97afce6d-b031-466d-a170-3ca50d6df245(OCS.16).aspx)

