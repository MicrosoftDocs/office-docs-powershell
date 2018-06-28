---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineDialInConferencingUser
schema: 2.0.0
---

# Get-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingUser cmdlet to view the properties and settings of users that are enabled for dial-in conferencing and are using Microsoft as their PSTN conferencing provider.

## SYNTAX

```
Get-CsOnlineDialInConferencingUser [[-Identity] <Object>] [-BridgeId <Object>] [-BridgeName <Object>]
 [-ServiceNumber <Object>] [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force]
 [-LdapFilter <Object>] [-ResultSize <Object>] [-Tenant <Object>] [-TenantDomain <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will only return users that have been enabled for audio conferencing using Microsoft as the audio conferencing provider.
Users that are enabled for audio conferencing using a third-party audio conferencing provider won't be returned.
If there are no users in the organization that have been enabled for audio conferencing, then the cmdlet will return no results.

The see a list of users with conferencing providers other than Microsoft use the Get-CsUserAcp cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialInConferencingUser -LdapFilter "Department=Finance"
```

This example uses the LdapFilter parameter to limit the returned data to users who work in the Finance department.



### -------------------------- Example 2 --------------------------
```
Get-CsOnlineDialInConferencingUser -ServiceNumber +14255034412 | Format-Table -Property DisplayName, SipAddress
```

This example returns users who have been enabled for audio conferencing provided by Microsoft, and are assigned to the specified service number.

By default, the Get-CsOnlineDialInConferencingUser cmdlet returns a large number of properties.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
The Format-Table cmdlet then uses the Property parameter to select the properties DisplayName and SipAddress.



## PARAMETERS

### -BridgeId
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeName
Specifies the name of the audio conferencing bridge.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the user to retrieve.
The user can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceNumber
Specifies a service number to serve as a filter for the returned user collection.
Only users who have been assigned the specified number will be returned.
The service number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.
The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven users (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.
The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

