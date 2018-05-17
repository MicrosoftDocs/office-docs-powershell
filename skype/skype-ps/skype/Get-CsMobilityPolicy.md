---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsMobilityPolicy
schema: 2.0.0
---

# Get-CsMobilityPolicy

## SYNOPSIS
Retrieves information about the mobility policies currently in use in an organization.
Mobility policies determine whether or not a user can use Skype for Business Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving calls.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Filter
```
Get-CsMobilityPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsMobilityPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsMobilityPolicy [[-Identity] <Object>] [-ApplicableTo <Object>] [-BypassDualWrite <Object>]
 [-Filter <Object>] [-Include <Object>] [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Mobile is a client application that enables users to run Skype for Business on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Skype for Business Server 2015 Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed using mobility policies.

With Skype for Business Server 2015, mobile devices can make or receive phone calls by using either the standard cellular phone network.
or by using Wi-Fi connections.
Mobility policies can be used to require Wi-Fi connections and to prevent calls over the cellular network.

Mobility policies can be configured at the global, site, or the per-user scope, and information about those policies can be retrieved by using the Get-CsMobilityPolicy cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMobilityPolicy
```

The command shown in Example 1 returns information about all the mobility policies configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsMobilityPolicy -Identity "site:Redmond"
```

Example 2 returns information about a single mobility policy: the policy with the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsMobilityPolicy -Filter "tag:*"
```

In Example 3, information is returned for all of your per-user mobility policies.
To do this, the Filter parameter is included along with the filter value "tag:*"; this returns any policy that has an Identity that begins with the string value "tag:".
By definition, any policy that has an identity beginning with that string value is a per-user policy.

### -------------------------- Example 4 --------------------------
```
Get-CsMobilityPolicy | Where-Object {$_.EnableOutsideVoice -eq $False}
```

The command shown in Example 4 limits the returned data to mobility policies where Call via Work has been disabled.
To carry out this task, the command first calls the Get-CsMobilityPolicy cmdlet without any parameters; that returns a collection of all the mobility policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableOutsideVoice property is equal to (-eq) False.


## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax:

`-Filter "site:*"`

To return a collection of all the per-user policies, use this syntax:

`-Filter "tag:*"`

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the mobility policy to be returned.
To refer to the global policy, use this syntax:

`-Identity global`

To refer to a site policy, use syntax similar to this:

`-Identity site:Redmond`

To refer to a per-user policy, use syntax similar to this:

`-Identity SalesDepartmentPolicy`

If this parameter is not specified, then the Get-CsMobilityPolicy cmdlet returns a collection of all the mobility policies in use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the mobility policy data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -ApplicableTo
{{Fill ApplicableTo Description}}

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
{{Fill BypassDualWrite Description}}

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

### -Include
{{Fill Include Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Accepted values: Automatic, All, SubscriptionDefaults, TenantDefinedOnly
Applicable: Skype for Business Online

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility


## NOTES


## RELATED LINKS

