---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsDialInConferencingAccessNumber
schema: 2.0.0
---

# Get-CsDialInConferencingAccessNumber

## SYNOPSIS
Returns information about all the dial-in conferencing access numbers configured for use in your organization.
Dial-in conferencing provides a way for users to use a "regular" telephone mobile phone, or device on the public switched telephone network (PSTN) to join the audio portion of an online conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDialInConferencingAccessNumber [[-Identity] <UserIdParameter>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

### EmptyRegion
```
Get-CsDialInConferencingAccessNumber [-Credential <PSCredential>] [-DomainController <Fqdn>] [-EmptyRegion]
 [-Filter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

### Region
```
Get-CsDialInConferencingAccessNumber [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>]
 [-OU <OUIdParameter>] [-Region <String>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
Dial-in conferencing enables users to use any kind of telephone (such as a standard "land line", a mobile phone, or a Voice over Internet Protocol (VoIP) phone) to join the audio portion of an online conference.
This enables users to participate in the meeting even if they do not have a computer or an Internet connection.
Users have full audio capabilities: they can speak to other participants and hear everything that takes place.
However, they won't be able to see shared slides, video feeds, or other visual elements.

In order to provide users with dial-in conferencing capabilities, you must create dial-in conferencing access numbers: phone numbers that users can call in order to be connected to a meeting.
Dial-in conferencing access numbers are created by using the New-CsDialInConferencingAccessNumber cmdlet.
When you create a new dial-in conferencing access number, you are actually creating a new contact object in Active Directory Domain Services; this contact object is used to represent the access number and all its properties.
Contact numbers can be retrieved by using the Get-CsDialInConferencingAccessNumber cmdlet.

If you have imported dial-in conferencing access numbers from Microsoft Office Communications Server 2007 these numbers will also be retrieved by running the Get-CsDialInConferencingAccessNumber cmdlet and including the Region parameter.
(Imported numbers will not be displayed unless you use the Region parameter.) Note, however, that a warning message will be displayed alongside the imported number's Uniform Resource Identifiers (URIs).
This is simply the way the cmdlet handles imported dial-in conferencing access numbers.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDialInConferencingAccessNumber
```

The command shown in Example 1 returns a collection of all the dial-in conferencing access numbers configured for use in the organization.
Calling the Get-CsDialInConferencingAccessNumber cmdlet without any additional parameters always returns a collection of all the available dial-in access numbers.

### -------------------------- Example 2 --------------------------
```
Get-CsDialInConferencingAccessNumber -Identity sip:RedmondDialIn@litwareinc.com
```

In Example 2, the dial-in conferencing access number with the Identity sip:RedmondDialIn@litwareinc.com is returned.
Because identities must be unique, this command will never return more than one access number.

### -------------------------- Example 3 --------------------------
```
Get-CsDialInConferencingAccessNumber -Region "Redmond"
```

Example 3 uses the Region parameter to return all the dial-in conferencing access numbers associated with the Redmond region.
To do this, the Get-CsDialInConferencingAccessNumber cmdlet is called along with the Region parameter.
Specifying "Redmond" as the parameter value causes the Get-CsDialInConferencingAccessNumber cmdlet to return all the numbers where "Redmond" appears in the list of associated regions.
For example, an access number that only listed Redmond as a region would be returned, as would an access number that listed both Redmond and Portland.

### -------------------------- Example 4 --------------------------
```
Get-CsDialInConferencingAccessNumber -Region $Null
```

Example 4 returns all the dial-in conferencing access numbers that are not associated with a region (that is, where the Regions property is empty).

### -------------------------- Example 5 --------------------------
```
Get-CsDialInConferencingAccessNumber -Region site:USA/Redmond
```

The command shown in Example 5 returns all the dial-in conferencing access numbers for the Redmond region that have been scoped to the USA site (that is, the site with the SiteId site:USA).

### -------------------------- Example 6 --------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {DisplayName -like "*Seattle*"}
```

In Example 6, the Filter parameter is used in order to return a collection of all the dial-in conferencing access numbers that include the string value "Seattle" somewhere in their DisplayName.
The filter value {DisplayName -like "*Seattle*"} limits the returned data to access numbers where the DisplayName includes the word "Seattle" (for example, Seattle Access Number; Dial-In Number for Seattle; Tacoma/Seattle Access Number; etc.).

### -------------------------- Example 7 --------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {LineUri -like "tel:+1425*"}
```

Example 7 returns all the dial-in conferencing access numbers where the line Uri begins with tel:+1425; that effectively returns all the access numbers in the U.S.
area code 425.
To do this, the Get-CsDialInConferencingAccessNumber cmdlet is called along with the Filter parameter; the filter value {LineUri -like "tel:+1425*"} limits the returned data to line Uris that begin with the string value "tel:+1425".
To return all the phone numbers for area code 425 or for the area code 206, use this filter value:

`{LineUri -like "tel:+1425*" -or LineUri -like "tel:+1206*"}`

### -------------------------- Example 8 --------------------------
```
Get-CsDialInConferencingAccessNumber | Where-Object {$_.PrimaryLanguage -eq "it-IT"}
```

Example 8 returns a collection of all the dial-in conferencing access numbers where the primary language is set to Italian.
To carry out this task, the Get-CsDialInConferencingAccessNumber cmdlet is first called in order to return a collection of all the access numbers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those numbers where the PrimaryLanguage property is equal to Italian ("it-It").

### -------------------------- Example 9 --------------------------
```
Get-CsDialInConferencingAccessNumber | Where-Object {$_.SecondaryLanguages -contains "fr-FR"}
```

The command shown in Example 9 returns all the dial-in conferencing access numbers where French is listed as one of the secondary languages.
To accomplish this task, the Get-CsDialInConferencingAccessNumber cmdlet is first called without any parameters; that returns a complete collection of the access numbers configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those numbers where the SecondaryLanguages property includes a listing for French (fr-FR).


## PARAMETERS

### -Identity
SIP address of the dial-in conferencing access number (that is, the contact object that represents the number) to be retrieved.
You must include the "sip:" prefix when specifying the Identity; for example: -Identity sip:RedmondDialIn@litwareinc.com.

If this parameter is not specified, then the Get-CsDialInConferencingAccessNumber cmdlet will return all the dial-in conferencing access numbers configured for use in your organization.

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsDialInConferencingAccessNumber cmdlet under alternate credentials; this might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-mcs-001) or its fully qualified domain name (for example, atl-mcs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmptyRegion
Returns information about the dial plans that are associated with a region that is not associated with at least one dial-in conferencing access number.
For example, suppose the Bellevue dial plan is associated with the Bellevue region, but no access numbers have been configured for the Bellevue region.
The Bellevue region would thus be considered an empty region.

This parameter cannot be used in conjunction with any other parameter.

```yaml
Type: SwitchParameter
Parameter Sets: EmptyRegion
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on specific attributes for Skype for Business Server.
For example, you can limit returned data to dial-in conferencing numbers that have the string value "Redmond" in their display name, or toll-free dial-in conferencing numbers that use the 1-800 prefix.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only access numbers that have the 1-800 prefix would look like this: {LineUri -like "tel:+1800*"}, withLineUri representing the Active Directory attribute, -like representing the comparison operator, and "tel:+1800*" representing the filter value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Enables you to return access numbers from a specific Active Directory organizational unit (OU).
This includes data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs, AccountsPayable and AccountsReceivable, access number information will be returned from each of these three OUs.

When specifying an OU, use the distinguished name of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com".

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Region
Returns all the dial-in conferencing access numbers associated with the specified dial plan region.
For example, to return all the dial-in numbers for the Northwest region, use this syntax: -Region Northwest.

You can also return access numbers that have been scoped to a particular site (or to the global scope) by including the scope in the parameter value.
For example, to return access numbers that use the Northwest region, and that have been scoped to the Redmond site, use this syntax: -Region site:Redmond/Northwest.
Note that, when referencing the site scope, you must use the SiteId property.
You can retrieve SiteId values by using the Get-CsSite cmdlet.

To return a list of access numbers that are not associated with a dial plan, set the Region parameter value to $Null: -Region $Null.

Note that dial-in conferencing access numbers are only returned in order of their assigned priority if this parameter is specified.
Priority order is the same order in which the numbers appear in meeting invitations and on the dial-in conferencing webpage.
For details, see the Set-CsDialInConferencingAccessNumber cmdlet help topic.

```yaml
Type: String
Parameter Sets: Region
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return just seven access numbers (regardless of how many access numbers are in your forest), simply include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven items will be returned.
If you set the ResultSize to 7 but you have only three access numbers in your forest, the command will return those three numbers and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
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

### String
The Get-CsDialInConferencingAccessNumber cmdlet accepts a string value representing the Identity of the access number.


## OUTPUTS

### Microsoft.Rtc.Management.Xds.AccessNumber


## NOTES

## RELATED LINKS

[New-CsDialInConferencingAccessNumber](New-CsDialInConferencingAccessNumber.md)

[Remove-CsDialInConferencingAccessNumber](Remove-CsDialInConferencingAccessNumber.md)

[Set-CsDialInConferencingAccessNumber](Set-CsDialInConferencingAccessNumber.md)
