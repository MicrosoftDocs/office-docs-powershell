---
external help file: 
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Get-CsOnlineUser

## SYNOPSIS
Returns information about users who have accounts homed on Skype for Business Online.
This cmdlet can only be used with Skype for Business Online.

## SYNTAX

```
Get-CsOnlineUser [[-Identity] <Object>] [-Credential <Object>] [-DomainController <Object>] [-Filter <Object>]
 [-LdapFilter <Object>] [-OnModernServer] [-OnOfficeCommunicationServer] [-OU <Object>] [-ResultSize <Object>]
 [-SkipUserPolicies] [-UnassignedUser] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineUser cmdlet returns information about users who have accounts homed on Skype for Business Online.
The returned information includes standard Active Directory account information (such as the department the user works in, his or her address and phone number, etc.) as well as Skype for Business Server 2015 specific information: the Get-CsOnlineUser cmdlet returns information about such things as whether or not the user has been enabled for Enterprise Voice and which per-user policies (if any) have been assigned to the user.

Note that the Get-CsOnlineUser cmdlet does not have a TenantId parameter; that means you cannot use a command similar to this in order to limit the returned data to users who have accounts with a specific Skype for Business Online tenant:

`Get-CsOnlineUser -TenantId "bf19b7db-6960-41e5-a139-2aa373474354"`

However, if you have multiple you can return users from a specified tenant by using the Filter parameter and a command similar to this:

`Get-CsOnlineUser -Filter {TenantId -eq "bf19b7db-6960-41e5-a139-2aa373474354"}`

That command will limit the returned data to user accounts belong to the tenant with the TenantId "bf19b7db-6960-41e5-a139-2aa373474354".
If you do not know your tenant IDs you can return that information by using this command:

`Get-CsTenant`

If you have a hybrid or "split domain" deployment (that is, a deployment in which some users have accounts homed on Skype for Business Online while other users have accounts homed on an on-premises version of Skype for Business Server 2015) keep in mind that the Get-CsOnlineUser cmdlet only returns information for Skype for Business Online users.
However, the cmdlet will return information for both online users and on-premises users.
If you want to exclude Skype for Business Online users from the data returned by the Get-CsUser cmdlet, use the following command:

`Get-CsUser -Filter {TenantId -eq "00000000-0000-0000-0000-000000000000"}`

By definition, users homed on the on-premises version will always have a TenantId equal to 00000000-0000-0000-0000-000000000000.
Users homed on Skype for Business Online will a TenantId that is equal to some value other than 00000000-0000-0000-0000-000000000000.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineUser
```

The command shown in Example 1 returns information for all the users configured as online users.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineUser -Identity "sip:kenmyer@litwareinc.com"
```

In Example 2 information is returned for a single online user: the user with the SIP address "sip:kenmyer@litwareinc.com".

### -------------------------- Example 3 --------------------------
```
Get-CsOnlineUser -Filter {ArchivingPolicy -eq "RedmondArchiving"}
```

Example 3 uses the Filter parameter to limit the returned data to online users who have been assigned the per-user archiving policy RedmondArchiving.
To do this, the filter value {ArchivingPolicy -eq "RedmondArchiving"} is employed; that syntax limits returned data to users where the ArchivingPolicy property is equal to (-eq) "RedmondArchiving".

### -------------------------- Example 4 --------------------------
```
Get-CsOnlineUser -Filter {HideFromAddressLists -eq $True}
```

Example 4 returns information only for user accounts that have been configured so that the account does not appear in Microsoft Exchange address lists.
(That is, the Active Directory attribute msExchHideFromAddressLists is True.) To carry out this task, the Filter parameter is included along with the filter value {HideFromAddressLists -eq $True}.

### -------------------------- Example 5 --------------------------
```
Get-CsOnlineUser -Filter {TenantId -eq "bf19b7db-6960-41e5-a139-2aa373474354"}
```

The command shown in Example 5 returns information for all the online users assigned to the tenant with the TenantID "bf19b7db-6960-41e5-a139-2aa373474354".
To accomplish the task, the command includes the Filter parameter along with the filter value {TenantId -eq "bf19b7db-6960-41e5-a139-2aa373474354"}.
This filter limits the returned data to online users assigned to the tenant "bf19b7db-6960-41e5-a139-2aa373474354".


## PARAMETERS

### -Credential
This parameter is not used with Skype for Business Online.

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
This parameter is not used with Skype for Business Online.

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

### -Filter
Enables you to limit the returned data by filtering on Skype for Business specific attributes.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

`{EnterpriseVoiceEnabled -eq $True}`

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
Indicates the Identity of the user account to be retrieved.
User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

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

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business).
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

### -OnModernServer
When present, the cmdlet returns a collection of users homed on Skype for Business.
Users with accounts on previous versions of the software will not be returned when you use this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: OnLyncServer
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnOfficeCommunicationServer
This parameter is not used with Skype for Business Online.

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

### -OU
This parameter is not used with Skype for Business Online.

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

### -SkipUserPolicies
PARAMVALUE: SwitchParameter

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

### -UnassignedUser
Enables you to return a collection of all the users who have been enabled for Skype for Business but are not currently assigned to a Registrar pool.
Users are not allowed to log on to unless they are assigned to a Registrar pool.

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

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADUser or String
A String must represent a valid user account Identity (for example, "sip:kenmyer@litwareinc.com").


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.ADOCOnlineUser


## NOTES


## RELATED LINKS

[Set-CsUser](Set-CsUser.md)

