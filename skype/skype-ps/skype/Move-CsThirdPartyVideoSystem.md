---
external help file: 
applicable: Skype for Business Server 2015
title: Move-CsThirdPartyVideoSystem
schema: 2.0.0
---

# Move-CsThirdPartyVideoSystem

## SYNOPSIS
Moves an Active Directory contact object that represents a third-party video system.
A third-party video system is a video teleconferencing (VTC) device that provides users with telepresence: the ability to participate in online meetings and conferences with full audio and video capabilities.

## SYNTAX

### Identity
```
Move-CsThirdPartyVideoSystem [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>]
 [-Report <String>] [-WhatIf] [<CommonParameters>]
```

### Users
```
Move-CsThirdPartyVideoSystem [-Target] <Fqdn> -UserList <String> [-ConcurrentMovesPerFE <Int32>] [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>]
 [-Report <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.
VTC contact objects can be created by using the New-CsThirdPartyVideoSystem cmdlet.
Note that new contact objects must be assigned to a Skype for Business Server Registrar at the time they are created.
If you later decide to move a contact object to a different pool, you can do so by using the Move-CsThirdPartyVideoSystem cmdlet.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Move-CsThirdPartyVideoSystem -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -Target "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 moves the third-party video system with the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com to the Registrar pool atl-cs-001.litwareinc.com.


### -------------------------- Example 2 -------------------------- 
```

Get-CsThirdPartyVideoSystem | Move-CsThirdPartyVideoSystem -Target "atl-cs-001.litwareinc.com"

```

Example 2 shows how you can move all the third-party video systems in the organization to the Registrar pool atl-cs-001.litwareinc.com.
To do this, the command first uses the Get-CsThirdPartyVideoSystem cmdlet to return a collection of all the available video systems.
That collection is then piped to the Move-CsThirdPartyVideoSystem cmdlet, which moves all the video systems to the Registrar pool atl-cs-001.litwareinc.com.

## PARAMETERS

### -Identity
Unique identifier for the third-party video system to be moved.
Video systems are identified by using the Active Directory distinguished name of the associated contact object.
By default, video systems use a GUID (globally unique identifier) as their common name, which means systems will typically have an Identity similar to this:

CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
The fully qualified domain name (FQDN) of the Registrar pool where the video system should be moved (for example, atl-cs-001.litwareinc.com).
In addition to a Registrar pool, the Target can also be the FQDN of a hosting provider.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentMovesPerFE
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to move the video system.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its FQDN (e.g., atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
If present, moves the video system but deletes any associated data (such as policies that were assigned to the system).
If not present, the video system is moved along with any associated data.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the video system despite those errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a video system contact object through the pipeline that represents the video system being moved.
By default, the Move-CsThirdPartyVideoSystem cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool
This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Server.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

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
The Move-CsThirdPartyVideoSystem cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object.

## OUTPUTS

###  
By default the Move-CsThirdPartyVideoSystem cmdlet does not return any data or objects.
However, if you include the PassThru parameter you can instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object through the pipeline.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystem](Get-CsThirdPartyVideoSystem.md)

[New-CsThirdPartyVideoSystem](New-CsThirdPartyVideoSystem.md)

[Remove-CsThirdPartyVideoSystem](Remove-CsThirdPartyVideoSystem.md)

[Set-CsThirdPartyVideoSystem](Set-CsThirdPartyVideoSystem.md)
