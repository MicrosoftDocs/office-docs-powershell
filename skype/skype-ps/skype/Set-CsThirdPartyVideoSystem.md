---
external help file: 
applicable: Skype for Business Server 2015
title: Set-CsThirdPartyVideoSystem
schema: 2.0.0
---

# Set-CsThirdPartyVideoSystem

## SYNOPSIS
Modifies an existing Active Directory contact object that represents a third-party video system.
A third-party video system is a video teleconferencing device (VTC) that provides users with telepresence: the ability to participate in online meetings and conferences with full audio and video capabilities.

## SYNTAX

```
Set-CsThirdPartyVideoSystem [-Identity] <UserIdParameter> [-Confirm] [-DisplayName <String>]
 [-Enabled <Boolean>] [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [-LineURI <String>]
 [-PassThru] [-SipAddress <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.
VTC contact objects can be created by using the `New-CsThirdPartyVideoSystem` cmdlet.
If you later need to modify the property values for one of these contact objects you can do so by using the `Set-CsThirdPartyVideoSystem` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsThirdPartyVideoSystem -Filter {DisplayName -eq "Redmond Video System" | Set-CsThirdPartyVideoSystem -SipAddress "sip:redmondvideo$litwareinc.com"
```

The command shown in Example 1 changes the SIP address for the third-party video system with the Active Directory display name Redmond Video System.
To carry out this task, the command first uses the `Get-CsThirdPartyVideoSystem` cmdlet and the Filter parameter to return the video system that has the Active Directory display name Redmond Video System.
The contact object for that system is then piped to the `Set-CsThirdPartyVideoSystem` cmdlet, which changes the object's SIP address to sip:redmondvideo@litwareinc.com.


### -------------------------- Example 2 --------------------------
```
Get-CsThirdPartyVideoSystem | Set-CsThirdPartyVideoSystem -Enabled $False
```

In Example 2, all the third-party video systems configured for use in the organization are disabled.
In order to do this, the command first uses the `Get-CsThirdPartyVideoSystem` cmdlet (without any parameters) to return a collection of all the available video systems.
That collection is then piped to the `Set-CsThirdPartyVideoSystem` cmdlet, which disables each system by setting the Enabled property to False ($False).


## PARAMETERS

### -Identity
Unique identifier for the video system being modified.
Video systems are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, video systems use a GUID (globally unique identifier) as their common name, which means systems will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
In turn, that means that you might find it easier to modify third-party video systems by using the `Get-CsThirdPartyVideoSystem` cmdlet to return the devices and then piping those objects to the `Set-CsThirdPartyVideoSystem` cmdlet.

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

### -DisplayName
Configures the Active Directory display name of the video system.

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

### -Enabled
When set to True ($True) the video system can be used with Skype for Business Server.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchivingPolicy
Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

NoArchiving

ArchivingToExchange

```yaml
Type: ExchangeArchivingPolicyOptionsEnum
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI
Phone number for the analog device.
The line URI should be specified by using the E.164 format, and should be prefixed by the "TEL:" prefix.
For example:

`-LineURI "TEL:+14255551297"`

Any extension number should be added to the end of the line URI; for example:

`-LineURI "TEL:+14255551297;ext=51297"`

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

### -PassThru
Enables you to pass a contact object through the pipeline that represents the third-party video system being modified.
By default, the `Set-CsThirdPartyVideoSystem` cmdlet does not pass objects through the pipeline.

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

### -SipAddress
Unique identifier that allows the video system to communicate with SIP devices such as Skype for Business.
The SIP address must be prefaced by the prefix "sip:".
For example:

`sip:redmondvideo@litwareinc.com`

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsThirdPartyVideoSystem` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object.

## OUTPUTS

###  
By default, the `Set-CsThirdPartyVideoSystem` cmdlet does not return any data or objects.
However, if you include the PassThru parameter the cmdlet will pass instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object through the pipeline.

## NOTES

## RELATED LINKS

[New-CsThirdPartyVideoSystem](New-CsThirdPartyVideoSystem.md)

[Remove-CsThirdPartyVideoSystem](Remove-CsThirdPartyVideoSystem.md)

[Set-CsThirdPartyVideoSystem](Set-CsThirdPartyVideoSystem.md)
