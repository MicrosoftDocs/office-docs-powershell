---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsMobilityPolicy
schema: 2.0.0
---

# Grant-CsMobilityPolicy

## SYNOPSIS

Grants a per-user mobility policy to a user or group of users.
Mobility policies determine whether or not a user can use a mobile device (such as a cell phone) to connect to Skype for Business Server.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving calls.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
Grant-CsMobilityPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Mobile is a client application that enables users to run Skype for Business Server on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed by using mobility policies.

With Skype for Business Server, mobile devices can make or receive phone calls by using either the standard cellular phone network.
or by using Wi-Fi connections.
Mobility policies can be used to require Wi-Fi connections and to prevent calls over the cellular network.

When you install Skype for Business Server, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

If you create a new policy at the site scope that policy will automatically be assigned to the appropriate site.
However, if you create a mobility policy at the per-user scope, that policy will exist but will not automatically be assigned to any users.
Instead, you must use the Grant-CsMobilityPolicy cmdlet to specifically assign a per-user policy to one or more users.

Note that mobility policies do not appear by default when you run the Get-CsUser cmdlet.
Because of that, you cannot see the per-user mobility policy assigned to a user by running a command similar to this:

`Get-CsUser "Ken Myer"`

Instead, you will need to use a command like this to see all the property values (including the mobility policy) for a user:

`Get-CsUser "Ken Myer" | Select-Object *`

Alternatively, you can use a command similar to this one to view just the display name and mobility policy for the user:

`Get-CsUser "Ken Myer" | Select-Object DisplayName, MobilityPolicy`

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsMobilityPolicy cmdlet locally: RTCUniversalServerAdmins.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsMobilityPolicy -Identity "Ken Myer" -PolicyName "RedmondMobilityPolicy"
```

The command shown in Example 1 assigns the per-user mobility policy RedmondMobilityPolicy to a single user: Ken Myer.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser -Filter {MobilityPolicy -eq "NorthAmericaMobilityPolicy"} | Grant-CsMobilityPolicy -PolicyName "RedmondMobilityPolicy"
```

In Example 2, the mobility policy RedmondMobilityPolicy is assigned to users currently managed by the policy NorthAmericaMobilityPolicy.
To do this, the command first uses the Get-CsUser cmdlet and the Filter parameter to retrieve all those users assigned the policy NorthAmericaMobilityPolicy; this is done by using the filter value {MobilityPolicy -eq "NorthAmericaMobilityPolicy"}.
After retrieving the collection of user accounts, those accounts are then piped to the Grant-CsMobilityPolicy cmdlet, which assigns each user the policy RedmondMobilityPolicy.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsMobilityPolicy -PolicyName "RedmondMobilityPolicy"
```

Example 3 assigns the mobility policy RedmondMobilityPolicy to all the users located in the city of Redmond.
To perform this task, the command first calls the Get-CsUser cmdlet along with the LdapFilter parameter; the filter value "l=Redmond" returns all the users located in Redmond.
(The "l" represents the Active Directory attribute "locality".) After the user accounts have been retrieved, those accounts are piped to the Grant-CsMobilityPolicy cmdlet; in turn, the Grant-CsMobilityPolicy cmdlet assigns each user the policy RedmondMobilityPolicy.


### -------------------------- EXAMPLE 4 -------------------------- 
```

Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsMobilityPolicy -PolicyName "RedmondMobilityPolicy"
```

In Example 4, RedmondMobilityPolicy is assigned to users who have Skype for Business Server accounts homed on atl-cs-001.litwareinc.com.
To do this, the command first uses the Get-CsUser cmdlet and the Filter parameter to retrieve all the user accounts homed on the specified Registrar pool; this can be done by using the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com"}.
After retrieving the collection of user accounts, those accounts are then piped to the Grant-CsMobilityPolicy cmdlet, which assigns each user the policy RedmondMobilityPolicy.


## PARAMETERS

### -Identity

Indicates the Identity of the user account to be assigned the per-user mobility policy.
User Identities are typically specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" will assign the policy to all the users who have a display name that ends with the string value " Smith".




```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified then the Grant-CsMobilityPolicy cmdlet will contact the first available domain controller.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsMobilityPolicy cmdlet does not pass objects through the pipeline.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondUsersMobilityPolicy has a PolicyName equal to RedmondUsersMobilityPolicy.
To assign a per-user policy use syntax like this:

`-PolicyName RedmondUsersMobilityPolicy`

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null):

`-PolicyName $Null`




```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
Grant-CsMobilityPolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

### Microsoft.Rtc.Management.AD.UserIdParameter

###  
The Grant-CsMobilityPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsMobilityPolicy does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will be able to pipeline instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

### System.Object

###  
By default, the Grant-CsMobilityPolicy cmdlet does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will be able to pipeline instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS


