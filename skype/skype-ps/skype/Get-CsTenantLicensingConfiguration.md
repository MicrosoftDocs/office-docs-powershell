---
external help file: 
applicable: Skype for Business Online
title: Get-CsTenantLicensingConfiguration
schema: 2.0.0
---

# Get-CsTenantLicensingConfiguration

## SYNOPSIS
Indicates whether licensing information for the specified tenant is available in the Lync admin center.

## SYNTAX

### Identity (Default)
```
Get-CsTenantHybridConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTenantHybridConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsTenantLicensingConfiguration cmdlet indicates whether licensing information for the specified tenant is available in the Lync admin center.
The cmdlet returns information similar to this:

Identity : GlobalStatus : Enabled

If the Status is equal to Enabled then licensing information is available in the admin center.
If not, then licensing information is not available in the admin center.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTenantLicensingConfiguration
```

The command shown in Example 1 returns licensing configuration information for the current tenant:


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of tenant licensing configuration settings.
Because each tenant is limited to a single, global collection of licensing configuration settings there is no need to use the Filter parameter.

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
Specifies the collection of tenant licensing configuration settings to be returned.
Because each tenant is limited to a single, global collection of licensing settings there is no need include this parameter when calling the Get-CsTenantLicensingConfiguration cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose licensing settings are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

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

### None


## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.WritableConfig.Settings.TenantConfiguration.TenantLicensingConfiguration


## NOTES


## RELATED LINKS

[Get-CsTenant](Get-CsTenant.md)

