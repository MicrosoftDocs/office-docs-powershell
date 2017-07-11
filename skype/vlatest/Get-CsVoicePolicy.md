---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoicePolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010, Skype for Business Online

Returns information about one or more voice policies configured for your organization.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about one or more voice policies configured for your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoicePolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsVoicePolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsVoicePolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

This cmdlet retrieves voice policy information.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
Use this cmdlet to retrieve the settings that enable and disable many of these features.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoicePolicy cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoicePolicy"}

Below Content Applies To: Skype for Business Online, Skype for Business Server 2015

This cmdlet retrieves voice policy information.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
Use this cmdlet to retrieve the settings that enable and disable many of these features.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy
```

This example displays all the voice policies that have been defined for an organization along with the settings for each.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example displays all the voice policies that have been defined for an organization along with the settings for each.

Get-CsVoicePolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Online)
```

```

This example displays all the voice policies that have been defined for an organization along with the settings for each.

Get-CsVoicePolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example displays all the voice policies that have been defined for an organization along with the settings for each.

Get-CsVoicePolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy -Identity UserPolicy1
```

This example uses the Identity parameter to retrieve the voice policy settings for the per-user policy named UserPolicy1.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example uses the Identity parameter to retrieve the voice policy settings for the per-user policy named UserPolicy1.

Get-CsVoicePolicy -Identity UserPolicy1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Online)
```

```

This example uses the Identity parameter to retrieve the voice policy settings for the per-user policy named UserPolicy1.

Get-CsVoicePolicy -Identity UserPolicy1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Identity parameter to retrieve the voice policy settings for the per-user policy named UserPolicy1.

Get-CsVoicePolicy -Identity UserPolicy1

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy -Filter tag*
```

This example uses the Filter parameter to retrieve all the voice policy settings that can be assigned to users.
All per-user voice policies have an Identity in the format tag:\<UserVoicePolicy\>, so we filter on tag  to retrieve all user voice policies.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example uses the Filter parameter to retrieve all the voice policy settings that can be assigned to users.
All per-user voice policies have an Identity in the format tag:\<UserVoicePolicy\>, so we filter on tag to retrieve all user voice policies.

Get-CsVoicePolicy -Filter tag*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Online)
```

```

This example uses the Filter parameter to retrieve all the voice policy settings that can be assigned to users.
All per-user voice policies have an Identity in the format tag:\<UserVoicePolicy\>, so we filter on tag to retrieve all user voice policies.

Get-CsVoicePolicy -Filter tag*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Filter parameter to retrieve all the voice policy settings that can be assigned to users.
All per-user voice policies have an Identity in the format tag:\<UserVoicePolicy\>, so we filter on tag to retrieve all user voice policies.

Get-CsVoicePolicy -Filter tag*

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A unique identifier specifying the scope, and in some cases the name, of the policy.
If this parameter is omitted, all voice policies for the organization are returned.



Below Content Applies To: Skype for Business Online

A unique identifier specifying the scope and, in some cases the name, of the policy.
If this parameter is omitted, all voice policies for the organization are returned.



```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

This parameter accepts a wildcard string and returns all voice policies with identities matching that string.
For example, a Filter value of site:* will return all voice policies defined at the site level.



Below Content Applies To: Skype for Business Online

This parameter accepts a wildcard string and returns all voice policies with identities matching that string.
For example, a Filter value of tag:* will return all voice policies defined at the per-user level.



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Retrieves the voice policy from the local replica of the Central Management store, rather than the Central Management store itself.



Below Content Applies To: Skype for Business Online

This parameter is not used with Skype for Business Online.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account whose voice policy is to be retrieved.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Online

Globally unique identifier (GUID) of the tenant account whose voice policy is to be retrieved.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose voice policy is to be retrieved.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
None.

## OUTPUTS

###  
This cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/05096aec-321c-4a50-99be-6e9fbbbe17fa(OCS.14).aspx)

[New-CsVoicePolicy]()

[Remove-CsVoicePolicy]()

[Set-CsVoicePolicy]()

[Grant-CsVoicePolicy]()

[Test-CsVoicePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/05096aec-321c-4a50-99be-6e9fbbbe17fa(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/99c2e14a-1be4-440e-a0c3-d493fabb4ea5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/05096aec-321c-4a50-99be-6e9fbbbe17fa(OCS.16).aspx)

