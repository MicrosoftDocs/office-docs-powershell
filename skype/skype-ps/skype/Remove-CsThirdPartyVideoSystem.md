---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsThirdPartyVideoSystem
schema: 2.0.0
---

# Remove-CsThirdPartyVideoSystem

## SYNOPSIS
Removes an Active Directory contact object that represents a third-party video system.
A third-party video system is a video teleconferencing (VTC) device that provides users with telepresence: the ability to participate in online meetings and conferences with full audio and video capabilities.

## SYNTAX

```
Remove-CsThirdPartyVideoSystem [-Identity] <UserIdParameter> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track and to manage, these devices.
VTC contact objects can be created by using the `New-CsThirdPartyVideoSystem` cmdlet.
These contact objects can later be deleted by using the `Remove-CsThirdPartyVideoSystem` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsThirdPartyVideoSystem -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com"
```

The command shown in Example 1 removes the third-party video system that has the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Video system identities can be returned by using the `Get-CsThirdPartyVideoSystem` cmdlet.


### -------------------------- Example 2 --------------------------
```
Get-CsThirdPartyVideoSystem -Filter {DisplayName -eq "Redmond Video System"} | Remove-CsThirdPartyVideoSystem
```

In Example 2, the `Remove-CsThirdPartyVideoSystem` cmdlet is used to delete the video system that has the Active Directory display name Redmond Video System.
To do this, the command first uses `Get-CsThirdPartyVideoSystem` and the Filter parameter to retrieve the Redmond Video System contact object (and does this without having to specify an Identity like CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.) That contact object is then piped to and deleted by, the `Remove-CsThirdPartyVideoSystem` cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsThirdPartyVideoSystem | Remove-CsThirdPartyVideoSystem
```

Example 3 removes all the third-party video systems configured for use in the organization.
To do this, the command first uses the `Get-CsThirdPartyVideoSystem` cmdlet to return a collection of all the third-party video systems.
Those video systems are then piped to and removed by, the `Remove-CsThirdPartyVideoSystem` cmdlet.


## PARAMETERS

### -Identity
Unique identifier for the third party video system to be removed.
Video systems are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, these contacts use a globally unique identifier (GUID) as their common name; that means video systems will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Because of that you might find it easier to retrieve video systems by using the `Get-CsThirdPartyVideoSystem` cmdlet and then piping the returned objects to the `Remove-CsThirdPartyVideoSystem` cmdlet.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Remove-CsThirdPartyVideoSystem` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object.

## OUTPUTS

###  
None.
The `Remove-CsThirdPartyVideoSystem` cmdlet does not return any objects or data.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystem](Get-CsThirdPartyVideoSystem.md)

[Move-CsThirdPartyVideoSystem](Move-CsThirdPartyVideoSystem.md)

[New-CsThirdPartyVideoSystem](New-CsThirdPartyVideoSystem.md)

[Set-CsThirdPartyVideoSystem](Set-CsThirdPartyVideoSystem.md)
