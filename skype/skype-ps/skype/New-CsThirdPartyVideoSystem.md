---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsThirdPartyVideoSystem
schema: 2.0.0
---

# New-CsThirdPartyVideoSystem

## SYNOPSIS
Creates an Active Directory contact object that represents a third-party video system.
A third-party video system is a video teleconferencing device (VTC) that provides users with telepresence: the ability to participate in online meetings and conferences with full audio and video capabilities.

## SYNTAX

### DN
```
New-CsThirdPartyVideoSystem -DN <ADObjectId> -RegistrarPool <Fqdn> -SipAddress <String> [-Confirm]
 [-DisplayName <String>] [-LineUri <String>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

### OU
```
New-CsThirdPartyVideoSystem -OU <OUIdParameter> -RegistrarPool <Fqdn> -SipAddress <String> [-Confirm]
 [-DisplayName <String>] [-LineUri <String>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track and to manage, these devices.
VTC contact objects can be created by using the `New-CsThirdPartyVideoSystem` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsThirdPartyVideoSystem -RegistrarPool "redmond-cs-001.litwareinc.com" -OU "ou=Telecommunications,dc=litwareinc,dc=com" -DisplayName "Redmond Video System" -SipAddress "sip:redmondvideo@litwareinc.com"
```

In Example 1, a new third-party video system contact object is created in the Telecommunications OU.
This new contact object will be homed on the Registrar pool Redmond-cs-001.litwareinc.com; will have the display name Redmond Video System and will use the SIP address sip:redmondvideo@litwareinc.com.


### -------------------------- Example 2 --------------------------
```
New-CsThirdPartyVideoSystem -RegistrarPool "redmond-cs-001.litwareinc.com" -DN "cn=RedmondVideoSystem,ou=Telecommunications,dc=litwareinc,dc=com" -SipAddress "sip:redmondvideo@litwareinc.com"
```

The command shown in Example 2 creates a new third-party video system by associating that system with an existing Active Directory contact object.
To carry out that task you need to include three parameters: RegistrarPool, which specifies the Registrar pool where the new video system account will be homed; DN, which specifies the Active Directory distinguished name of the existing contact object; and SipAddress, which assigns a SIP address to the new video system.


## PARAMETERS

### -DN
Enables you to associate an existing Active Directory contact object with a third-party video system.
If you have a contact object you want to associate with video system, use the DN parameter followed by the distinguished name of that contact.
For example:

`-DN "cn=Building 14 Lobby,dc=litwareinc,dc=com"`

Note that the command will fail if the specified contact does not exist.
Note, too that you cannot use the OU and the DN parameters in the same command.

```yaml
Type: ADObjectId
Parameter Sets: DN
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Distinguished name of the Active Directory organizational unit (OU) where the contact object should be located.
For example:

`-OU "ou=Redmond,dc=litwareinc,dc=com"`

If you include the OU parameter, a new contact will be created in the specified OU and the contact will automatically be assigned a GUID (globally unique identifier) as its common name.
As a result, the contact object will have a name similar to this: {ce84964a-c4da-4622-ad34-c54ff3ed361f}.

```yaml
Type: OUIdParameter
Parameter Sets: OU
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool
Fully qualified domain name (FQDN) of the Registrar pool where the contact object should be homed.
For example:

`-RegistrarPool "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
Unique identifier that allows the video system to communicate with SIP devices such as Skype for Business.
The SIP address must be prefaced by the prefix "sip:".
For example:

`sip:contoso_video@litwareinc.com`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Configures the Active Directory display name of the video system.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
Phone number for the VTC device.
The line URI should be specified by using the E.164 format and be prefixed by the "TEL:" prefix.
For example:

`-LineURI "TEL:+14255551297"`

Any extension number should be added to the end of the line URI; for example:

`-LineURI "TEL:+14255551297;ext=51297"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a contact object through the pipeline that represents the third-party video system being modified.
By default, the `New-CsThirdPartyVideoSystem` cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `New-CsThirdPartyVideoSystem` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsThirdPartyVideoSystem` cmdlet creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystem](Get-CsThirdPartyVideoSystem.md)

[Move-CsThirdPartyVideoSystem](Move-CsThirdPartyVideoSystem.md)

[Remove-CsThirdPartyVideoSystem](Remove-CsThirdPartyVideoSystem.md)

[Set-CsThirdPartyVideoSystem](Set-CsThirdPartyVideoSystem.md)

