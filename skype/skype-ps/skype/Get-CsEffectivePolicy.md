---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsEffectivePolicy
schema: 2.0.0
---

# Get-CsEffectivePolicy

## SYNOPSIS
Returns the "effective policies" for the specified user or users.
This simply means that, if a user has been a per-user policy, the Identity of that policy will be displayed.
If a user has not been assigned a per-user policy, then the Get-CsEffectivePolicy cmdlet will indicate whether the user is managed by a service policy, a site policy, or the global policy.
This enables you to determine exactly which policy is being used to manage a given user.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsEffectivePolicy [-Identity] <UserIdParameter> [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
Among other things, the Get-CsUser cmdlet returns information about the Microsoft Lync Server policies that are used to govern a user's behavior.
For example:

DialPlan : RedmondDialPlan

LocationPolicy : RedmondLocationPolicy

ClientPolicy :

In the preceding output, it would appear that the user is being managed by a specific dial plan and location policy, but is not managed by a client.
In truth, the user is managed by a client policy, either the global policy or a site policy.
However, the Get-CsUser cmdlet only returns information about per-user policies that have been assigned to the user; of the user is managed by a global policy, a site policy, or a service policy, then the Get-CsUser cmdlet returns no information.

In troubleshooting scenarios, it can been very useful to know whether a user is managed by a global policy, a site policy, or a service policy.
In cases such as that, you can use the Get-CsEffectivePolicy cmdlet to return exact information about the policies that are used to govern a user's behavior.
For the preceding user, the Get-CsEffectivePolicy cmdlet might return information similar to this:

LocationProfile : RedmondDialPlan

LocationPolicy : RedmondLocationPolicy

ClientPolicy : Global

This output lets you know that the user is managed by the global client policy.

Note that, unlike the Get-CsUser cmdlet, the Get-CsEffectivePolicy cmdlet only returns information about policies; it does not return additional information such as the user's phone number or Registrar pool.
Note, too that there are some differences in the terminology used in the Get-CsUser cmdlet to label policies names vs.
the terminology used by the Get-CsEffectivePolicy cmdlet.
For example, the Get-CsUser cmdlet uses the name DialPlan while the Get-CsEffectivePolicy cmdlet uses the name LocationProfile.

The functions carried out by the Get-CsEffectivePolicy cmdlet are not directly available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsEffectivePolicy - Identity "Ken Myer"
```

The command shown in Example 1 returns the effective policies for the user with the Active Directory display name Ken Myer.

### -------------------------- Example 2 --------------------------
```
"Ken Myer","Pilar Ackerman" | Get-CsEffectivePolicy
```

In the preceding command, effective policy information is returned for users with the display names Ken Myer and Pilar Ackerman.
Policy information for multiple users can be returned by piping multiple user Identities to the Get-CsEffectivePolicy cmdlet.

### -------------------------- Example 3 --------------------------
```
Get-CsUser -Filter {ConferencingPolicy -eq "RedmondConferencingPolicy"} | Get-CsEffectivePolicy
```

In Example 3, effective policy information is returned for all the users who have been assigned the conferencing policy RedmondConferencingPolicy.
To do this, the command first uses the Get-CsUser cmdlet to return a collection of users who have been assigned RedmondConferencingPolicy; the Filter parameter and the filter value {ConferencingPolicy -eq "RedmondConferencingPolicy"} limits the returned data to users who have been assigned the RedmondConferencingPolicy per-user conferencing policy.
That collection of user accounts is then piped to the Get-CsEffectivePolicy cmdlet, which displays effective policy information for each user in the collection.

### -------------------------- Example 4 --------------------------
```
Get-CsUser -Filter {ConferencingPolicy -eq "RedmondConferencingPolicy"} | Get-CsEffectivePolicy | Select-Object Identity, MobilityPolicy
```

Example 4 is a variation of the command shown in Example 3.
In this example, effective policy information is again returned for all the users who have been assigned the conferencing policy RedmondConferencingPolicy; in this case, however, the returned information is limited to the user Identity and mobility policy.
This is done by returning all the effective policy information and then piping that data to the Select-Object cmdlet, which, in turn, is used to limit the displayed data to the Identity and MobilityPolicy properties.

### -------------------------- Example 5 --------------------------
```
Get-CsUser -LdapFilter "Department=Finance" | Get-CsEffectivePolicy
```

In Example 5, effective policy information is displayed for all the users in the Finance department.
This task is carried out by first using the Get-CsUser cmdlet and the LdapFilter property to return a collection of user accounts; the filter value "Department=Finance" limits those accounts to users who work in the Finance department.
That collection is then piped to the Get-CsEffectivePolicy cmdlet, which displays effective policy information for each user in the collection.


## PARAMETERS

### -Identity
Indicates the Identity of the user account whose effective policy settings are being calculated.
User Identities are typically specified by using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsEffectivePolicy cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve user information.
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN).
For example:

`-DomainController "atl-dc-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser
The Get-CsEffectivePolicy cmdlet accepts a pipelined string value representing the display name of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.


## OUTPUTS

### Microsoft.Rtc.Management.AD.Cmdlets.EffectivePolicies


## NOTES


## RELATED LINKS

[Get-CsUser](Get-CsUser.md)
