---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsConferenceDirectory

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new conference directory for use in your organization.
Conference directories are used to help dial-in conferencing users locate conference information.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new conference directory for use in your organization.
Conference directories are used to help dial-in conferencing users locate conference information.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsConferenceDirectory [-Identity] <XdsGlobalRelativeIdentity> -HomePool <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you create a dial-in conferencing Uniform Resource Identifier (URI), those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Microsoft Lync Server 2010 uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

New conference directories can be created by calling the New-CsConferenceDirectory cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsConferenceDirectory"}

**Below Content Applies To:** Lync Server 2013

When you create a dial-in conferencing Uniform Resource Identifier (URI), those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Lync Server uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

New conference directories can be created by calling the New-CsConferenceDirectory cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsConferenceDirectory"}

**Below Content Applies To:** Skype for Business Server 2015

When you create a dial-in conferencing Uniform Resource Identifier (URI), those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Skype for Business Server 2015 uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

New conference directories can be created by calling the New-CsConferenceDirectory cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsConferenceDirectory -Identity 42 -HomePool "atl-cs-001.litwareinc.com"
```

Creates a new conference directory with the Identity 42.
This directory will be hosted on the pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Creates a new conference directory with the Identity 42.
This directory will be hosted on the pool atl-cs-001.litwareinc.com.

New-CsConferenceDirectory -Identity 42 -HomePool "atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Creates a new conference directory with the Identity 42.
This directory will be hosted on the pool atl-cs-001.litwareinc.com.

New-CsConferenceDirectory -Identity 42 -HomePool "atl-cs-001.litwareinc.com"

## PARAMETERS

### -Identity
Unique numeric identifier for the new conference directory.
Identities can be any integer value between 0 and 9999 inclusive; however, Identities must be unique.
(For example, you cannot have two directories with the Identity 575.) You do not need to follow a numeric order when creating new directories.
For example, you can create a directory with the Identity 999 followed by a directory with the Identity 2 followed by a directory with the Identity 438, and so on.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HomePool
Fully qualified domain name (FQDN) of the Registrar pool where the new conference directory will be hosted.
For example: -Identity atl-cs-001.litwareinc.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
None.
New-CsConferenceDirectory does not accept pipelined input.

###  
None.
The New-CsConferenceDirectory cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/fd5a4369-10cd-4337-94df-51bcaee4fde9(OCS.14).aspx)

[Get-CsConferenceDirectory]()

[Move-CsConferenceDirectory]()

[Remove-CsConferenceDirectory]()

[Online Version](http://technet.microsoft.com/EN-US/library/fd5a4369-10cd-4337-94df-51bcaee4fde9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/fd5a4369-10cd-4337-94df-51bcaee4fde9(OCS.16).aspx)

