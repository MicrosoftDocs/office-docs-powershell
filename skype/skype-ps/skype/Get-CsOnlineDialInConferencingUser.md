---
external help file: 
applicable: Skype for Business Online
title: Get-CsOnlineDialInConferencingUser
schema: 2.0.0
---

# Get-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the `Get-CsOnlineDialInConferencingUser` cmdlet to view the properties and settings of users that are enabled for dial-in conferencing and are using Microsoft as their PSTN conferencing provider.

## SYNTAX

```
Get-CsOnlineDialInConferencingUser [-BridgeName <String>] [-ServiceNumber <String>] [-TenantDomain <String>]
 [-LdapFilter <String>] [[-Identity] <UserIdParameter>] [-Tenant <Guid>] [-BridgeId <Guid>] [-ResultSize <Int32>]
 [-DomainController <Fqdn>] [-Force] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will only return users that have been enabled for audio conferencing using Microsoft as the audio conferencing provider.
Users that are enabled for audio conferencing using a third-party audio conferencing provider won't be returned.
If there are no users in the organization that have been enabled for audio conferencing, then the cmdlet will return no results.

The see a list of users with conferencing providers other than Microsoft use the Get-CsUserAcp cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:> Get-CsOnlineDialInConferencingUser -LdapFilter "Department=Finance"
```

This example uses the LdapFilter parameter to limit the returned data to users who work in the Finance department.

### -------------------------- Example 2 --------------------------
```
PS C:> Get-CsOnlineDialInConferencingUser -ServiceNumber +14255034412 | Format-Table -Property DisplayName, SipAddress
```

This example returns users who have been enabled for audio conferencing provided by Microsoft, and are assigned to the specified service number.

By default, the Get-CsOnlineDialInConferencingUser cmdlet returns a large number of properties.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
The Format-Table cmdlet then uses the Property parameter to select the properties DisplayName and SipAddress.


## PARAMETERS

### -BridgeId
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

```yaml
Type: Guid
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
Type: String
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
Type: UserIdParameter
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
Type: String
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
Type: Fqdn
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
Type: String
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
Type: Int32
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
NOTE: This parameter is reserved for internal Microsoft use.

Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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
[Enable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/enable-csonlinedialinconferencinguser?view=skype-ps)

[Disable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/disable-csonlinedialinconferencinguser?view=skype-ps)

[Set-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinedialinconferencinguser?view=skype-ps)
