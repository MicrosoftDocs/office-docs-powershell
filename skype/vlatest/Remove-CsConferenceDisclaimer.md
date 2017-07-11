---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConferenceDisclaimer

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Clears the text from the header and body of the conference disclaimer used in your organization.
The conference disclaimer is a message that is displayed to users who join the conference by using a hyperlink (for example, users who paste a link to the conference into a browser such as Windows Internet Explorer).

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Clears the text from the header and body of the conference disclaimer used in your organization.
The conference disclaimer is a message that is displayed to users who join the conference by using a hyperlink (for example, users who paste a link to the conference into a browser such as Windows Internet Explorer).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsConferenceDisclaimer [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when these people join conferences hosted by Lync Server 2010.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

Lync Server 2010 allows for a single, global instance of the conference disclaimer.
The Remove-CsConferenceDisclaimer cmdlet enables you to reset your conference disclaimer: when you run this cmdlet, both the disclaimer header and the disclaimer body are set to null values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferenceDisclaimer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferenceDisclaimer"}

Below Content Applies To: Lync Server 2013

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when these people join conferences hosted by Lync Server.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

Lync Server allows for a single, global instance of the conference disclaimer.
The Remove-CsConferenceDisclaimer cmdlet enables you to reset your conference disclaimer: when you run this cmdlet, both the disclaimer header and the disclaimer body are set to null values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferenceDisclaimer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferenceDisclaimer"}

Below Content Applies To: Skype for Business Server 2015

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when these people join conferences hosted by Skype for Business Server 2015.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

Skype for Business Server 2015 allows for a single, global instance of the conference disclaimer.
The Remove-CsConferenceDisclaimer cmdlet enables you to reset your conference disclaimer: when you run this cmdlet, both the disclaimer header and the disclaimer body are set to null values.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsConferenceDisclaimer -Identity global
```

The preceding command resets the property values of the global disclaimer.
That means that both the disclaimer Header and Body will be set to null values, giving you a blank disclaimer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 resets the property values of the global disclaimer.
That means that both the disclaimer Header and Body will be set to null values, giving you a blank disclaimer.

Remove-CsConferenceDisclaimer -Identity global

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 resets the property values of the global disclaimer.
That means that both the disclaimer Header and Body will be set to null values, giving you a blank disclaimer.

Remove-CsConferenceDisclaimer -Identity global

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique Identity of the conference disclaimer to be removed.
Although you can only have a single, global instance of the conference disclaimer, you must still use the Identity parameter when calling Remove-CsConferenceDisclaimer: -Identity global.



Below Content Applies To: Skype for Business Server 2015

Unique Identity of the conference disclaimer to be removed.
Although you can only have a single, global instance of the conference disclaimer, you must still use the Identity parameter when calling the Remove-CsConferenceDisclaimer cmdlet.



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
Remove-CsConferenceDisclaimer accepts pipelined input of conference disclaimer objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.
The Remove-CsConferenceDisclaimer cmdlet accepts pipelined input of conference disclaimer objects.

## OUTPUTS

###  
None.
Instead, Remove-CsConferenceDisclaimer resets existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object to their default property values.

###  
None.
Instead, the Remove-CsConferenceDisclaimer cmdlet resets existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object to their default property values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/196252a1-2526-4944-9064-01d1846f3266(OCS.14).aspx)

[Get-CsConferenceDisclaimer]()

[Set-CsConferenceDisclaimer]()

[Online Version](http://technet.microsoft.com/EN-US/library/196252a1-2526-4944-9064-01d1846f3266(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/196252a1-2526-4944-9064-01d1846f3266(OCS.16).aspx)

