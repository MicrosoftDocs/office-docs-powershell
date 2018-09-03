---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Get-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Returns information about the online voice routing policies configured for use in your tenant. Online voice routing policies manage online PSTN usages for users of Phone System.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineVoiceRoutingPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineVoiceRoutingPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Direct Routing scenarios. Assigning your Skype for Business Online users an online voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Skype for Business Online or Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy
```

The command shown in Example 1 returns information for all the online voice routing policies configured for use in the tenant.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy"
```

In Example 2, information is returned for a single online voice routing policy: the policy with the Identity RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Filter "tag:*"
```

The command shown in Example 3 returns information about all the online voice routing policies configured at the per-user scope. To do this, the command uses the Filter parameter and the filter value "tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

### -------------------------- Example 4 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -contains "Long Distance"}
```

In Example 4, information is returned only for those online voice routing policies that include the PSTN usage "Long Distance". To carry out this task, the command first calls `Get-CsVoiceRoutingPolicy` without any parameters; that returns a collection of all the voice routing policies configured for use in the organization. This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the OnlinePstnUsages property includes (-contains) the usage "Long Distance".

### -------------------------- Example 5 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -notcontains "Long Distance"}
```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those online voice routing policies that do not include the PSTN usage "Long Distance". In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more online voice routing policies. For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "tag:\*"

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the online voice routing policy to be retrieved. To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "RedmondOnlineVoiceRoutingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then `Get-CsOnlineVoiceRoutingPolicy` returns all the voice routing policies configured for use in the tenant.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csonlinevoiceroutingpolicy?view=skype-ps)

[Set-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinevoiceroutingpolicy?view=skype-ps)

[Grant-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csonlinevoiceroutingpolicy?view=skype-ps)

[Remove-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csonlinevoiceroutingpolicy?view=skype-ps)
