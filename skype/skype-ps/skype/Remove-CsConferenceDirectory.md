---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsConferenceDirectory
schema: 2.0.0
---

# Remove-CsConferenceDirectory

## SYNOPSIS
Removes an existing conference directory.
Conference directories are used to help dial-in conferencing users locate conference information.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsConferenceDirectory [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
When you create a dial-in conferencing Uniform Resource Identifier (URI) those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Skype for Business Server uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

Conference directories are created by using the `New-CsConferenceDirectory` cmdlet.
Occasionally, you might need to delete one or more of these directories; for example, you might need to decommission the pool where the directories were hosted.
Conference directories can be removed by calling the `Remove-CsConferenceDirectory` cmdlet.
Note that if you need to move a directory from one pool to another, you can do so by calling the `Move-CsConferenceDirectory` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsConferenceDirectory -Identity 2
```

The command shown in Example 1 deletes the conference directory with the Identity 2.


### -------------------------- Example 2 ------------------------
```
Get-CsConferenceDirectory | Where-Object {$_.ServiceID -match "UserServer:atl-cs-001.litwareinc.com"} | Remove-CsConferenceDirectory
```

Example 2 deletes all the conference directories found on the service UserServer:atl-cs-001.litwareinc.com.
To do this, the command first calls the `Get-CsConferenceDirectory` cmdlet without any parameters; that returns a collection of all the conference directories currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those directories hosted on the service UserServer:atl-cs-001.litwareinc.com.
In turn, that filtered collection is piped to and deleted by, the `Remove-CsConferenceDirectory` cmdlet.


## PARAMETERS

### -Identity
Numeric identity of the conference directory to be removed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
When present, removes the conference directory even if the pool that hosts the directory is currently unavailable.
By default, the `Remove-CsConferenceDirectory` cmdlet will not remove directories if the corresponding pool cannot be contacted.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsConferenceDirectory` cmdlet accepts pipelined input of conference directory objects.

## OUTPUTS

###  
None.
Instead, the `Removes-CsConferenceDirectory` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories object.

## NOTES

## RELATED LINKS

[Get-CsConferenceDirectory](Get-CsConferenceDirectory.md)

[Move-CsConferenceDirectory](Move-CsConferenceDirectory.md)

[New-CsConferenceDirectory](New-CsConferenceDirectory.md)

