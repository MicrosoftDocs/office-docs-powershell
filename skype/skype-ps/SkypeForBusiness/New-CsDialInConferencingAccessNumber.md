---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csdialinconferencingaccessnumber
schema: 2.0.0
title: New-CsDialInConferencingAccessNumber
---

# New-CsDialInConferencingAccessNumber

## SYNOPSIS

Creates a new dial-in conferencing access number.
Dial-in conferencing provides a way for users to use a "regular" telephone, cell phone or other device on the public switched telephone network (PSTN) to join the audio portion of a conference.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Onprem (Default)
```
New-CsDialInConferencingAccessNumber -PrimaryUri <String> -DisplayNumber <String> -LineURI <String>
 -PrimaryLanguage <String>
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>]
 -Pool <Fqdn> -Regions <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>
 [-ScopeToSite] [-Tenant <Guid>] [-DisplayName <String>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Hosting
```
New-CsDialInConferencingAccessNumber -PrimaryUri <String> -DisplayNumber <String> -LineURI <String>
 -PrimaryLanguage <String>
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>]
 [-ScopeToSite] -HostingProviderProxyFqdn <Fqdn> [-Tenant <Guid>] [-DisplayName <String>] [-PassThru] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Dial-in conferencing enables users to use any kind of telephone (such as standard "land line," a mobile phone, or a Voice over Internet Protocol (VoIP) phone) to join the audio portion of an online conference.
This enables users to participate in the meeting even if they do not have a computer or an Internet connection.
Users have full audio capabilities: they can speak to other participants and hear everything that takes place.
They just aren't able to see shared slides, video feeds, or other visual elements.

In order to provide users with dial-in conferencing capabilities, you must create dial-in conferencing access numbers: phone numbers users can call in order to be connected to a meeting.
Dial-in conferencing access numbers are created by using the New-CsDialInConferencingAccessNumber cmdlet.
When you create a new dial-in conferencing access number, you actually create a new contact object in Active Directory Domain Services; this contact object is used to represent the access number and all its properties.

When creating a new dial-in number you must include the following parameters: PrimaryUri; LineURI; Pool; DisplayNumber; PrimaryLanguage; and Regions.
All of these parameters (and their parameter values) are reasonably straightforward, with perhaps one exception: Regions.
When you create a new access number, that number must be associated with one or more regions.
In turn, a region cannot be associated with a dial-in conferencing number unless that region appears in at least one dial plan.
If a region appears in the DialInConferencingRegion property of at least one dial plan, then it can be associated with an access number.
If not, then the region cannot be associated with an access number.
That simply means you must first create a dial plan, and specify a region for that dial plan, before you can create a dial-in conferencing access number.



## EXAMPLES


### EXAMPLE 1
```
New-CsDialInConferencingAccessNumber -PrimaryUri "sip:RedmondDialIn@litwareinc.com" -DisplayNumber "1-800-555-1234" -LineUri "tel:+18005551234" -Pool atl-cs-001.litwareinc.com -PrimaryLanguage "en-US" -Regions "Redmond"
```

Example 1 creates a new dial-in conferencing access number with the primary URI sip:RedmondDialIn@litwareinc.com.
In addition to the PrimaryUri parameter, the command also includes parameters that configure the telephone number as displayed in Skype for Business (DisplayNumber); the telephone number in the E.164 format (LineUri); the Registrar pool the new number is assigned to `(-Pool): the primary language for the number (PrimaryLanguage)`; and the region the new number is assigned to (Regions).


### EXAMPLE 2
```
New-CsDialInConferencingAccessNumber -PrimaryUri "sip:RedmondDialIn@litwareinc.com" -DisplayNumber "1-800-555-1234" -LineUri "tel:+18005551234" -Pool atl-cs-001.litwareinc.com -PrimaryLanguage "en-US" -Regions "Redmond" -SecondaryLanguages "fr-CA", "fr-FR"

```

The command shown in Example 2 is a variation of the command shown in Example 1; the only difference is that the command shown in this example also assigns two secondary languages (French Canadian and French) to the new dial-in conferencing access number.
To assign these secondary languages, the SecondaryLanguages parameter is included, along with a comma-separated list of the languages to be assigned (fr-CA and fr-FR).


### EXAMPLE 3
```
New-CsDialInConferencingAccessNumber -PrimaryUri "sip:RedmondDialIn@litwareinc.com" -DisplayNumber "1-800-555-1234" -LineUri "tel:+18005551234" -Pool atl-cs-001.litwareinc.com -PrimaryLanguage "en-US" -Regions "Redmond" -ScopeToSite
```

Example 3 creates a new dial-in conferencing access number that is scoped to the site where the contact object's home pool is located.
To do this, the command includes the parameter ScopeToSite.



## PARAMETERS

### -DisplayName

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Active Directory display name for the new contact object.
This is the name that will also be displayed in Skype for Business.



```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayNumber

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Phone number as displayed in meeting invitations and on the dial-in conferencing webpage.
The DisplayNumber can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; or 1.800.555.1234.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostingProviderProxyFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the hosting provider that hosts your dial-in conferencing service.

```yaml
Type: Microsoft.Rtc.Management.Deploy.Fqdn
Parameter Sets: Hosting
Aliases: HostingProvider

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The actual dial-in conferencing phone number.
The LineURI must be specified using the following syntax: the tel: prefix followed by a plus sign (+) followed by the country/region calling code, area code, and phone number.
For example: tel:+18005551234.
Note that spaces, hyphens, parentheses and other characters are not allowed.

LineURIs must be unique throughout Active Directory.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to pass a contact object through the pipeline that represents the new dial-in conferencing access number.
By default, the New-CsDialInConferencingAccessNumber cmdlet does not pass objects through the pipeline.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pool

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Home pool for the new contact object.

```yaml
Type: Microsoft.Rtc.Management.Deploy.Fqdn
Parameter Sets: Onprem
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryLanguage

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Primary language used for making dial-in conferencing announcements.
The language must be configured using one of the available dial-in conferencing language codes; for example, en-US for U.S.
English; fr-FR for French; etc.
To return a list of the available language codes, type the following command at the Windows PowerShell prompt:

`Get-CsDialInConferencingLanguageList | Select-Object -ExpandProperty Languages.`

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryUri

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019


Unique SIP address to be assigned to the new contact object.
When specifying the PrimaryUri you must include the "sip:" prefix.
For example: `-PrimaryUri "sip:RedmondDialIn@litwareinc.com".`
Note that the sip: prefix must be entered in all lowercase letters.



```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Regions

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Dial plan regions associated with the dial-in number.
If a region is not included in at least one dial plan, then it cannot be associated with a dial-in conferencing access number.
To specify multiple regions, use a comma-separated list: `-Regions "Northwest", "Southwest"`

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: Onprem
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeToSite

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

If present, the new number will be scoped to the same site as the contact object's home pool.
If the ScopeToSite parameter is not included, the new number will be assigned to the global scope.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryLanguages

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Optional collection of languages that can also be used for making dial-in conferencing announcements.
Secondary languages must be configured as a comma-separated list of language codes; for example, the following syntax sets French Canadian and French as secondary languages; `-SecondaryLanguages "fr-CA", "fr-FR".`

A single access number can have as many as four secondary languages.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new dial-in conferencing access number is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`



```yaml
Type: System.Nullable`1[System.Guid]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The New-CsDialInConferencingAccessNumber cmdlet does not accept pipelined input.

## OUTPUTS


### Microsoft.Rtc.Management.Xds.AccessNumber
The New-CsDialInConferencingAccessNumber cmdlet creates new instances of the Microsoft.Rtc.Management.Xds.AccessNumber object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingAccessNumber](Get-CsDialInConferencingAccessNumber.md)

[Remove-CsDialInConferencingAccessNumber](Remove-CsDialInConferencingAccessNumber.md)

[Set-CsDialInConferencingAccessNumber](Set-CsDialInConferencingAccessNumber.md)
