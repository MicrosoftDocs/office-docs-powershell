---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Get-CsOnlinePstnUsage

## SYNOPSIS
Returns information about online public switched telephone network (PSTN) usage records used in your tenant.

## SYNTAX

### Identity (Default)
```
Get-CsOnlinePstnUsage [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOnlinePstnUsage [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Online PSTN usages are string values that are used for call authorization. An online PSTN usage links an online voice policy to a route. The `Get-CsOnlinePstnUsage` cmdlet retrieves the list of all online PSTN usages available within a tenant.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CSOnlinePSTNUsage
```

This command returns the list of global PSTN usages available within the tenant.

## PARAMETERS

### -Filter
The Filter parameter allows you to retrieve only those PSTN usages with an Identity matching a particular wildcard string. However, the only Identity available to PSTN usages is Global, so this parameter is not useful for this cmdlet.

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
The level at which these settings are applied. The only identity that can be applied to PSTN usages is Global.

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
Type: System.Guid
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
[Set-CsOnlinePstnUsage](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinepstnusage?view=skype-ps)
