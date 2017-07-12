---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsMobilityPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Retrieves information about the mobility policies currently in use in an organization.
Mobility policies determine whether or not a user can use Lync Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsMobilityPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-Include \<PolicyFilter\>\] \[-ApplicableTo \<UserIdParameter\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsMobilityPolicy \[-Tenant \<guid\>\] \[-Include \<PolicyFilter\>\] \[-ApplicableTo \<UserIdParameter\>\] \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2013

Lync Mobile is a client application that enables users to run Lync on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Lync Server Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.

Both of these capabilities - the ability to run Lync Mobile and the ability to use Call via Work - are managed using mobility policies.

Mobility policies can be configured at the global, site, or the per-user scope, and information about those policies can be retrieved by using the Get-CsMobilityPolicy cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsMobilityPolicy cmdlet locally: RTCUniversalServerAdmins.

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

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

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the mobility policies configured for use in your organization.

Get-CsMobilityPolicy

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the mobility policies configured for use in your organization.

Get-CsMobilityPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information about a single mobility policy: the policy with the Identity site:Redmond.

Get-CsMobilityPolicy -Identity "site:Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information about a single mobility policy: the policy with the Identity site:Redmond.

Get-CsMobilityPolicy -Identity "site:Redmond"

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all of your per-user mobility policies.
To do this, the Filter parameter is included along with the filter value "tag:*"; this returns any policy that has an Identity that begins with the string value "tag:".
By definition, any policy that has an identity beginning with that string value is a per-user policy.

Get-CsMobilityPolicy -Filter "tag:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all of your per-user mobility policies.
To do this, the Filter parameter is included along with the filter value "tag:*"; this returns any policy that has an Identity that begins with the string value "tag:".
By definition, any policy that has an identity beginning with that string value is a per-user policy.

Get-CsMobilityPolicy -Filter "tag:*"

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 limits the returned data to mobility policies where Call via Work has been disabled.
To carry out this task, the command first calls the Get-CsMobilityPolicy cmdlet without any parameters; that returns a collection of all the mobility policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableOutsideVoice property is equal to (-eq) False.

Get-CsMobilityPolicy | Where-Object {$_.EnableOutsideVoice -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 limits the returned data to mobility policies where Call via Work has been disabled.
To carry out this task, the command first calls the Get-CsMobilityPolicy cmdlet without any parameters; that returns a collection of all the mobility policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableOutsideVoice property is equal to (-eq) False.

Get-CsMobilityPolicy | Where-Object {$_.EnableOutsideVoice -eq $False}

## PARAMETERS

### -Filter
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax:

-Filter "site:*"

To return a collection of all the per-user policies, use this syntax:

-Filter "tag:*"



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier of the mobility policy to be returned.
To refer to the global policy, use this syntax:

-Identity global

To refer to a site policy, use syntax similar to this:

-Identity site:Redmond

To refer to a per-user policy, use syntax similar to this:

-Identity SalesDepartmentPolicy

If this parameter is not specified, then Get-CsMobilityPolicy returns a collection of all the mobility policies in use in the organization.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the mobility policy to be returned.
To refer to the global policy, use this syntax:

-Identity global

To refer to a site policy, use syntax similar to this:

-Identity site:Redmond

To refer to a per-user policy, use syntax similar to this:

-Identity SalesDepartmentPolicy

If this parameter is not specified, then the Get-CsMobilityPolicy cmdlet returns a collection of all the mobility policies in use in the organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the mobility policy data from the local replica of the Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

###  
Get-CsMobilityPolicy does not accept pipelined input.

### None

###  
The Get-CsMobilityPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsMobilityPolicy returns instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

### System.Object

###  
The Get-CsMobilityPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/51ef83de-9cc2-4df8-b4f1-8d816b8de431(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/51ef83de-9cc2-4df8-b4f1-8d816b8de431(OCS.16).aspx)

