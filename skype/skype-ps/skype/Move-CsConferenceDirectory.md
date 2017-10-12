---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Move-CsConferenceDirectory
schema: 2.0.0
---

# Move-CsConferenceDirectory

## SYNOPSIS

Moves an existing conference directory from one pool to another.
Conference directories are used to help dial-in conferencing users locate conference information.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Move-CsConferenceDirectory [-Identity] <XdsGlobalRelativeIdentity> -TargetPool <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

When you create a dial-in conferencing Uniform Resource Identifier (URI), those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult to translate to devices that are not SIP-aware; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Skype for Business Server uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can then use these numbers instead of a SIP URI when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

Occasionally, you might need to move a conference directory from one pool to another; for example, if you decommission a pool you might need to move your existing conference directories to a new location.
The Move-CsConferenceDirectory cmdlet enables you to move conference directories to a different pool.

Before you move a conference directory it is highly recommended that you make a backup copy of that directory.
This can be done by using the Export-CsUserData cmdlet and the ConferenceDirectoryFilter parameter.
For example, this command backs up conference directory 3 to the file C:\Logs\ConferenceDirectory3.zip:

`Export-CsUserData -PoolFqdn "atl-cs-001.litwareinc.com" -ConferenceFilterDirectory 3 -FileName "C:\Logs\ConferenceDirectory3.zip"`



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsConferenceDirectory -Identity 3 -TargetPool atl-cs-002.litwareinc.com
```

The command shown in Example 1 moves the conference directory with the Identity 3 to the pool atl-cs-002.litwareinc.com.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Move-CsConferenceDirectory -Identity 3 -TargetPool atl-cs-002.litwareinc.com -Force
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Force parameter is included to ensure that the move takes place even if the target pool is currently unavailable.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsConferenceDirectory | Move-CsConferenceDirectory -TargetPool atl-cs-002.litwareinc.com

```

Example 3 moves all the existing conference directories to the target pool atl-cs-002.litwareinc.com.
To carry out this task the command first uses the Get-CsConferenceDirectory cmdlet to return a collection of all the conference directories currently in use in the organization.
This collection is then piped to the Move-CsConferenceDirectory cmdlet, which moves each directory in the collection to the target pool.

## PARAMETERS

### -Identity
Numeric identity of the conference directory to be moved.

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

### -TargetPool
Fully qualified domain name (FQDN) of the pool where the conference directory is to be moved.
For example: `-Identity atl-cs-002.litwareinc.com.`

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

When present, moves the conference directory even if the target pool is currently unavailable.
By default, the Move-CsConferenceDirectory cmdlet will not move directories if the target pool cannot be contacted.

Before running the Move-CsConferenceDirectory cmdlet, note that if you use the -Force parameter, the dial-in code for existing meetings will be lost.
Users will still be able to join meetings using a Lync client, but unable to dial-in to meetings by phone dial in.



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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Move-CsConferenceDirectory cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsConferenceDirectory](Get-CsConferenceDirectory.md)

[New-CsConferenceDirectory](New-CsConferenceDirectory.md)

[Remove-CsConferenceDirectory](Remove-CsConferenceDirectory.md)
