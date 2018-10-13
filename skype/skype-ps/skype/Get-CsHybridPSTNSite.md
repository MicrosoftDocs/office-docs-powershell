---
external help file: 
applicable: Skype for Business Online
title: Get-CsHybridPSTNSite
schema: 2.0.0
---

# Get-CsHybridPSTNSite

## SYNOPSIS
Use the Get-CsHybridPSTNSite cmdlet to retrieve information about your hybrid public switched telephone network (PSTN) sites.

## SYNTAX

### Identity (Default)
```
Get-CsHybridPSTNSite [-Tenant <Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsHybridPSTNSite [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Hybrid PSTN sites are created, retrieved, modified, and deleted by the CsHybridPSTNSite cmdlet group (New, Get, Set, and Remove .) The hybrid PSTN sites can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify hybrid PSTN sites through the CsTenantHybridConfiguration cmdlets, you must use the CsHybridPSTNSite cmdlets to manage hybrid PSTN sites.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHybridPSTNSite
```

The command shown in Example 1 returns information for all the PSTN sites.

### -------------------------- Example 2 --------------------------
```
Get-CsHybridPSTNSite -Identity "SeattlePSTN"
```

The command shown in Example 2 returns information for the PSTN site with the given identity.


## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on (PSTN) site specific attributes.
The Filter parameter uses the same filtering syntax that is used by the Where-Object cmdlet.

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
Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example: -Identity "SeattlePSTN".

```yaml
Type: XdsGlobalRelativeIdentity
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
Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Specifies the global unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".

You can find the tenant ID for your Skype for Business Online tenants by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

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

### HybridPstnSite


## NOTES


## RELATED LINKS

