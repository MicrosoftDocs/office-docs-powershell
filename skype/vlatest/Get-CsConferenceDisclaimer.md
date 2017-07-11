---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsConferenceDisclaimer

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the conference disclaimer used in your organization.
The conference disclaimer is a message that is displayed to users who join the conference by using a hyperlink (for example, users who paste a link to the conference into a browser such as Windows Internet Explorer).

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about the conference disclaimer used in your organization.
The conference disclaimer is a message that is displayed to users who join the conference by using a hyperlink (for example, users who paste a link to the conference into a browser such as Windows Internet Explorer).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsConferenceDisclaimer [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsConferenceDisclaimer [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants at the time participants join conferences hosted by Microsoft Lync Server 2010.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference, and users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

The Get-CsConferenceDisclaimer cmdlet enables you to view the body and header of your organization's disclaimer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsConferenceDisclaimer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsConferenceDisclaimer"}

Below Content Applies To: Lync Server 2013

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants at the time participants join conferences hosted by Lync Server.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference, and users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

The Get-CsConferenceDisclaimer cmdlet enables you to view the body and header of your organization's disclaimer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsConferenceDisclaimer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsConferenceDisclaimer"}

Below Content Applies To: Skype for Business Server 2015

When configuring conferencing settings, administrators can include a legal disclaimer to display to participants at the time participants join conferences hosted by Skype for Business Server 2015.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference, and users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

The Get-CsConferenceDisclaimer cmdlet enables you to view the body and header of your organization's disclaimer.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CSConferenceDisclaimer
```

The command shown in Example 1 returns information about the conference disclaimer configured for use in your organization.
Because you are limited to a single disclaimer (configured at the global scope), you do not need to specify an Identity when running this command.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about the conference disclaimer configured for use in your organization.
Because you are limited to a single disclaimer (configured at the global scope), you do not need to specify an Identity when running this command.

Get-CSConferenceDisclaimer

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about the conference disclaimer configured for use in your organization.
Because you are limited to a single disclaimer (configured at the global scope), you do not need to specify an Identity when running this command.

Get-CSConferenceDisclaimer

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique Identity of the conference disclaimer.
Because you can only have a single, global instance of the conference disclaimer, you do not need to specify an Identity when calling Get-CsConferenceDisclaimer.
You can, however, use the following syntax to reference the global disclaimer: -Identity global.



Below Content Applies To: Skype for Business Server 2015

Unique Identity of the conference disclaimer.
Because you can only have a single, global instance of the conference disclaimer, you do not need to specify an Identity when calling the Get-CsConferenceDisclaimer cmdlet.
You can, however, use the following syntax to reference the global disclaimer: -Identity global.



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

### -Filter
Enables you to use wildcard values when referencing a conference disclaimer.
Because you can only have a single, global instance of the conference disclaimer, there is really no reason to ever use the Filter parameter.
However, you can use the following syntax to reference the global disclaimer: -Filter "g*".
That syntax brings back all the conference disclaimers that have an Identity that begins with the letter "g".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the conference disclaimer data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Get-CsConferenceDisclaimer returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.

###  
The Get-CsConferenceDisclaimer cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2382aaef-9c5e-43f8-99de-6c880134db7d(OCS.14).aspx)

[Remove-CsConferenceDisclaimer]()

[Set-CsConferenceDisclaimer]()

[Online Version](http://technet.microsoft.com/EN-US/library/2382aaef-9c5e-43f8-99de-6c880134db7d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2382aaef-9c5e-43f8-99de-6c880134db7d(OCS.16).aspx)

