---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConferenceDirectory

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an existing conference directory.
Conference directories are used to help dial-in conferencing users locate conference information.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an existing conference directory.
Conference directories are used to help dial-in conferencing users locate conference information.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsConferenceDirectory [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When you create a dial-in conferencing Uniform Resource Identifier (URI) those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Microsoft Lync Server 2010 uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

Conference directories are created by using the New-CsConferenceDirectory cmdlet.
Occasionally, you might need to delete one or more of these directories; for example, you might need to decommission the pool where the directories were hosted.
Conference directories can be removed by calling the Remove-CsConferenceDirectory cmdlet.
Note that if you need to move a directory from one pool to another, you can do so by calling the Move-CsConferenceDirectory cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferenceDirectory"}

Below Content Applies To: Lync Server 2013

When you create a dial-in conferencing Uniform Resource Identifier (URI) those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Lync Server uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

Conference directories are created by using the New-CsConferenceDirectory cmdlet.
Occasionally, you might need to delete one or more of these directories; for example, you might need to decommission the pool where the directories were hosted.
Conference directories can be removed by calling the Remove-CsConferenceDirectory cmdlet.
Note that if you need to move a directory from one pool to another, you can do so by calling the Move-CsConferenceDirectory cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferenceDirectory"}

Below Content Applies To: Skype for Business Server 2015

When you create a dial-in conferencing Uniform Resource Identifier (URI) those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Skype for Business Server 2015 uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

Conference directories are created by using the New-CsConferenceDirectory cmdlet.
Occasionally, you might need to delete one or more of these directories; for example, you might need to decommission the pool where the directories were hosted.
Conference directories can be removed by calling the Remove-CsConferenceDirectory cmdlet.
Note that if you need to move a directory from one pool to another, you can do so by calling the Move-CsConferenceDirectory cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsConferenceDirectory -Identity 2
```

The command shown in Example 1 deletes the conference directory with the Identity 2.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the conference directory with the Identity 2.

Remove-CsConferenceDirectory -Identity 2

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the conference directory with the Identity 2.

Remove-CsConferenceDirectory -Identity 2

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsConferenceDirectory | Where-Object {$_.ServiceID -match "UserServer:atl-cs-001.litwareinc.com"} | Remove-CsConferenceDirectory
```

The preceding command deletes all the conference directories found on the service UserServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsConferenceDirectory without any parameters; that returns a collection of all the conference directories currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those directories hosted on the service UserServer:atl-cs-001.litwareinc.com.
In turn, that filtered collection is piped to, and deleted by, the Remove-CsConferenceDirectory cmdlet.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the conference directories found on the service UserServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsConferenceDirectory without any parameters; that returns a collection of all the conference directories currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those directories hosted on the service UserServer:atl-cs-001.litwareinc.com.
In turn, that filtered collection is piped to, and deleted by, the Remove-CsConferenceDirectory cmdlet.

Get-CsConferenceDirectory | Where-Object {$_.ServiceID -match "UserServer:atl-cs-001.litwareinc.com"} | Remove-CsConferenceDirectory

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the conference directories found on the service UserServer:atl-cs-001.litwareinc.com.
To do this, the command first calls the Get-CsConferenceDirectory cmdlet without any parameters; that returns a collection of all the conference directories currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those directories hosted on the service UserServer:atl-cs-001.litwareinc.com.
In turn, that filtered collection is piped to, and deleted by, the Remove-CsConferenceDirectory cmdlet.

Get-CsConferenceDirectory | Where-Object {$_.ServiceID -match "UserServer:atl-cs-001.litwareinc.com"} | Remove-CsConferenceDirectory

## PARAMETERS

### -Identity
Numeric identity of the conference directory to be removed.

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

### -Force
Below Content Applies To: Lync Server 2010, Lync Server 2013

When present, removes the conference directory even if the pool that hosts the directory is currently unavailable.
By default, Remove-CsConferenceDirectory will not remove directories if the corresponding pool cannot be contacted.



Below Content Applies To: Skype for Business Server 2015

When present, removes the conference directory even if the pool that hosts the directory is currently unavailable.
By default, the Remove-CsConferenceDirectory cmdlet will not remove directories if the corresponding pool cannot be contacted.



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
Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.
Remove-CsConferenceDirectory accepts pipelined input of conference directory objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.
The Remove-CsConferenceDirectory cmdlet accepts pipelined input of conference directory objects.

## OUTPUTS

###  
None.
Instead, Removes-CsConferenceDirectory deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.

###  
None.
Instead, the Removes-CsConferenceDirectory cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c2c62a14-f3f3-472f-bf91-1fcea9e45425(OCS.14).aspx)

[Get-CsConferenceDirectory]()

[Move-CsConferenceDirectory]()

[New-CsConferenceDirectory]()

[Online Version](http://technet.microsoft.com/EN-US/library/c2c62a14-f3f3-472f-bf91-1fcea9e45425(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c2c62a14-f3f3-472f-bf91-1fcea9e45425(OCS.16).aspx)

