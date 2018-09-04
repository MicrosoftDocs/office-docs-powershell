---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Remove-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Deletes an existing online voice routing policy. Online voice routing policies manage online PSTN usages for Phone System users.

## SYNTAX

### Identity
```
Remove-CsOnlineVoiceRoutingPolicy [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-Force] [-WhatIf]
[-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Direct Routing scenarios. Assigning your Skype for Business Online users an online voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Skype for Business Online or Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy"
```

The command shown in Example 1 deletes the online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Filter "tag:*" | Remove-CsOnlineVoiceRoutingPolicy
```

In Example 2, all the online voice routing policies configured at the per-user scope are removed. To do this, the command first calls the `Get-CsOnlineVoiceRoutingPolicy` cmdlet along with the Filter parameter; the filter value "tag:\*" limits the returned data to online voice routing policies configured at the per-user scope. Those per-user policies are then piped to and removed by, the `Remove-CsOnlineVoiceRoutingPolicy` cmdlet.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -contains "Long Distance"} | Remove-CsOnlineVoiceRoutingPolicy
```

In Example 3, all the online voice routing polices that include the online PSTN usage "Long Distance" are removed. To carry out this task, the `Get-CsOnlineVoiceRoutingPolicy` cmdlet is first called without any parameters in order to return a collection of all the available online voice routing policies. That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the OnlinePstnUsages property includes (-contains) the usage "Long Distance". Policies that meet that criterion are then piped to the `Remove-CsOnlineVoiceRoutingPolicy`, which removes each online voice routing policy that includes the online PSTN usage "Long Distance".

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Identity
Unique identifier assigned to the policy when it was created. Online voice routing policies can be assigned at the global scope or the per-user scope. To refer to the global instance, use this syntax:

-Identity global

To refer to a per-user policy, use syntax similar to this:

-Identity "RedmondOnlineVoiceRoutingPolicy"

If you do not specify an Identity, then the `Set-CsOnlineVoiceRoutingPolicy` cmdlet will modify the global policy.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

### Microsoft.Rtc.Management.Xds.XdsIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csonlinevoiceroutingpolicy?view=skype-ps)

[Get-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinevoiceroutingpolicy?view=skype-ps)

[Set-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinevoiceroutingpolicy?view=skype-ps)

[Grant-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csonlinevoiceroutingpolicy?view=skype-ps)
