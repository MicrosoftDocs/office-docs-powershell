---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsDialInConferencingAccessNumber
schema: 2.0.0
---

# Set-CsDialInConferencingAccessNumber

## SYNOPSIS
Modifies the property values of an existing dial-in conferencing access number.
Dial-in conferencing provides a way for users to use a "regular" telephone, mobile phone or other device on the public switched telephone network (PSTN) to join the audio portion of a conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Reorder
```
Set-CsDialInConferencingAccessNumber [-Identity] <UserIdParameter> -Priority <Int32> -ReorderedRegion <String>
 [-WhatIf] [-Confirm] [-PassThru] [<CommonParameters>]
```

### Identity
```
Set-CsDialInConferencingAccessNumber [-Identity] <UserIdParameter> [-DisplayName <String>]
 [-DisplayNumber <String>] [-LineUri <String>] [-PrimaryLanguage <String>]
 [-Regions <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>] [-ScopeToGlobal]
 [-ScopeToSite]
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>] [-WhatIf]
 [-Confirm] [-PassThru] [<CommonParameters>]
```

### Instance
```
Set-CsDialInConferencingAccessNumber [-Instance] <AccessNumber> [-ScopeToGlobal] [-ScopeToSite] [-WhatIf]
 [-Confirm] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
Dial-in conferencing enables users to use any kind of telephone (for example, a standard "land line," a mobile phone, or a Voice over Internet Protocol (VoIP) phone) to join the audio portion of a conference.
This enables users to participate in the meeting even if they do not have a computer or an Internet connection.
Dial-in users have full audio capabilities: they can speak to other participants and hear everything that takes place; they just aren't able to see shared slides, video feeds, or other visual elements.

In order to provide users with dial-in conferencing capabilities, you must create dial-in conferencing access numbers: phone numbers users can call in order to be connected to a meeting.
Dial-in conferencing access numbers are created by using the `New-CsDialInConferencingAccessNumber` cmdlet.
When you create a new dial-in conferencing access number, you actually create a new contact object in Active Directory Domain Services.
This contact object is used to represent the access number and all its properties.

After a dial-in conferencing number has been created, you can use the `Set-CsDialInConferencingAccessNumber` cmdlet to modify the properties of that number.
For example, you can change such things as the phone number (LineUri) itself or the display name for the contact object that represents that number.
In addition, the `Set-CsDialInConferencingAccessNumber` cmdlet enables you to modify the scope of the number; for example, you can use this cmdlet to take a number that has been assigned to the global scope and reassign it to the site scope.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsDialInConferencingAccessNumber -Identity "sip:RedmondDialIn@litwareinc.com" -DisplayName "Redmond Dial-In Access Number"
```

The command shown in Example 1 modifies the DisplayName property for the dial-in conferencing access number with the Identity sip:RedmondDialIn@litwareinc.com.
In this example, the display name is set to "Redmond Dial-In Access Number".


### -------------------------- Example 2 ------------------------
```
Set-CsDialInConferencingAccessNumber -Identity "sip:RedmondDialIn@litwareinc.com" -Regions "Redmond", "Seattle"
```

In Example 2, the dial-in conferencing access number with the Identity sip:RedmondDialIn@litwareinc.com is modified to include two regions: Redmond and Seattle.
To do this, the Regions parameter is called, followed by the two regions (two string values separated by commas).
Note that this command will fail unless both the Redmond and Seattle regions have already been defined in dial plans.


### -------------------------- Example 3 ------------------------
```
Get-CsDialInConferencingAccessNumber | Where-Object {$_.PrimaryLanguage -eq "fr-FR"}| Set-CsDialInConferencingAccessNumber -SecondaryLanguages "fr-CA"
```

In Example 3, all the dial-in conferencing access numbers where the primary language is French are modified to use French Canadian as the secondary language.
To carry out this task, the `Get-CsDialInConferencingAccessNumber` cmdlet is first called to return a collection of all the dial-in access numbers configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which picks out the access numbers where the PrimaryLanguage property is equal to French ("fr-FR").
This filtered collection is then piped to the `Set-CsDialInConferencingAccessNumber` cmdlet, which sets the value of the SecondaryLanguages property to French Canadian ("fr-CA").


### -------------------------- Example 4 ------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {DisplayName -eq "Default DialIn Access Number"} | Set-CsDialInConferencingAccessNumber -DisplayName "Litwareinc Conferencing"
```

The command shown in Example 4 changes the Active Directory display name for the specified dial-in conferencing access number.
To do this, the command first uses the `Get-CsDialInConferencingAccessNumber` cmdlet and the Filter parameter to return the dial-in access number where the DisplayName property is equal to "Default DialIn Access Number".
That access number is then piped to the `Set-CsDialInConferencingAccessNumber` cmdlet, which changes the display name to Litwareinc Conferencing.


### -------------------------- Example 5 ------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {LineUri -eq "TEL:+14255558715"} | Set-CsDialInConferencingAccessNumber -DisplayNumber "1-425-555-1298" -LineUri "tel:+14255551298"
```

In Example 5, both the display number and the line Uniform Resource Identifier (URI) are modified for the specified dial-in conferencing access number.
To retrieve the number to be modified, the command first uses the `Get-CsDialInConferencingAccessNumber` cmdlet and the Filter parameter; the accompanying filter value limits the returned data to the access number where the LineUri property is equal to TEL:+14255558715.
That access number is then piped to the `Set-CsDialInConferencingAccessNumber` cmdlet, which modifies both the DisplayNumber and LineUri properties of the access number.


### -------------------------- Example 6 ------------------------
```
Get-CsDialInConferencingAccessNumber | Where-Object {$_.PrimaryLanguage -ne "en-US"} | Set-CsDialInConferencingAccessNumber -SecondaryLanguages "fr-FR","it-IT"
```

Example 6 assigns a pair of secondary languages to all the dial-in conferencing access numbers that do not use U.S.
English as their primary language.
To do this, the command first calls the `Get-CsDialInConferencingAccessNumber` cmdlet to return a collection of all the dial-in conferencing access numbers configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which selects only those numbers where the PrimaryLanguage property is not equal to U.S.
English (en-US).
The filtered collection is then piped to the `Set-CsDialInConferencingAccessNumber` cmdlet, which uses the -SecondaryLanguages parameter to assign each number in the collection the secondary languages French (fr-FR) and Italian (it-IT).


### -------------------------- Example 7 ------------------------
```
Get-CsDialInConferencingAccessNumber -Identity ""sip:RedmondDialIn@litwareinc.com"" -Priority 0 -ReorderedRegion Redmond
```

The command shown in Example 7 assigns the dial-in conferencing access number "sip:RedmondDialIn@litwareinc.com" the highest priority in the Redmond region; that results in the number being listed first in meeting invitations and on the dial-in conferencing webpage.
To set the priority, the Priority parameter is included along with the parameter value 0.
(The highest priority access number has a Priority value of 0, the second-highest priority number has a Priority value of 1, and so on.) In addition, the ReorderedRegion parameter is included to indicate that access number priorities are to be changed within the Redmond region.


## PARAMETERS

### -Identity
SIP address of the contact object that represents the dial-in conferencing number.
When specifying the Identity you must include the "sip:" prefix; for example: `-Identity " sip:RedmondDialIn@litwareinc.com"`.

```yaml
Type: UserIdParameter
Parameter Sets: Reorder, Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: AccessNumber
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DisplayName
Active Directory display name for the new contact object.
This is the name that will also be displayed in Skype for Business.


```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayNumber
Phone number as displayed in meeting invitations and on the Dial-in Conferencing Settings webpage.
The DisplayNumber can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; or 1.800.555.1234.

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
The actual dial-in conferencing phone number.
The LineUri must be specified by using the following syntax: the tel: prefix followed by a plus sign (+) followed by the country/region calling code, area code and phone number.
For example: tel:+18005551234.
Spaces, hyphens, parentheses and other characters are not allowed.

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryLanguage
Primary language used for making dial-in conferencing announcements.
The language must be configured by using one of the available dial-in conferencing language codes; for example, en-US for U.S.
English or fr-FR for French.
To return a list of the available language codes, type the following command at the Windows PowerShell prompt:

`Get-CsDialInConferencingLanguageList | Select-Object -ExpandProperty Languages.`


```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Enables you to change the order in which dial-in conferencing numbers are presented to users in meeting invitations or when they access the Dial-In Conferencing Settings webpage.
Lower numbers are given a higher priority; to have a number appear at the beginning of the list set the priority to 0.
Note that if you change the priority of a given number you must also use the ReorderedRegion parameter to indicate the region where the modified priority should take effect.


```yaml
Type: Int32
Parameter Sets: Reorder
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Regions
Dial plan regions associated with the dial-in number.
If a region is not included in at least one dial plan, then it cannot be associated with a dial-in conferencing access number.
To specify multiple regions, use a comma-separated list: `-Regions "Northwest", "Southwest"`

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReorderedRegion
Used with the Priority parameter when changing the priority of a dial-in conferencing number with a region.
The ReorderedRegion parameter indicates the region where the priority reordering is to take place; for example: `-ReorderedRegion "Redmond"`.

```yaml
Type: String
Parameter Sets: Reorder
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeToGlobal
If present, the dial-in conferencing number will be assigned to the global scope.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeToSite
If present, the dial-in conferencing number will be scoped to the site where the contact object's Registrar pool resides.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryLanguages
Optional collection of languages that can also be used for making dial-in conferencing announcements.
Secondary languages must be configured as a comma-separated list of language codes; for example, the following syntax sets French Canadian and French as secondary languages; -SecondaryLanguages "fr-CA", "fr-FR".

An access number can be associated with as many as four secondary languages.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: Identity
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

### -PassThru
Enables you to pass a contact object through the pipeline that represents the modified dial-in conferencing access number.
By default, the `Set-CsDialInConferencingAccessNumber` cmdlet does not pass objects through the pipeline.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.Xds.AccessNumber object.
The `Set-CsDialInConferencingAccessNumber` cmdlet accepts pipelined input of the access number object.

## OUTPUTS

###  
The `Set-CsDialInConferencingAccessNumber` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.Xds.AccessNumber object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingAccessNumber](Get-CsDialInConferencingAccessNumber.md)

[New-CsDialInConferencingAccessNumber](New-CsDialInConferencingAccessNumber.md)

[Remove-CsDialInConferencingAccessNumber](Remove-CsDialInConferencingAccessNumber.md)

