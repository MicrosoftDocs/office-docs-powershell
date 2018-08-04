---
external help file: 
applicable: Skype for Business Online
title: Get-CsHybridPSTNAppliance
schema: 2.0.0
---

# Get-CsHybridPSTNAppliance

## SYNOPSIS
Use the `Get-CsHybridPSTNAppliance` cmdlet to retrieve information about your Skype for Business Cloud Connector Edition appliances.

## SYNTAX

```
Get-CsHybridPSTNAppliance [-Name <String>] [-LocalStore] [[-Identity] <XdsGlobalRelativeIdentity>] 
[-Tenant <Guid>] [-Filter <String>] [-SiteName <String>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Cloud Connector Edition appliances are registered, retrieved, modified, and unregistered by the CsHybridPSTNAppliance cmdlet group (Register, Get, Set, and Unregister).
The Skype for Business Cloud Connector Edition appliances can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify Skype for Business Cloud Connector Edition appliances through the CsTenantHybridConfiguration cmdlets.
You must use the CsHybridPSTNAppliance cmdlets to manage Skype for Business Cloud Connector Edition appliances.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHybridPSTNAppliance
```

The command shown in Example 1 returns information for all the Skype for Business Cloud Connector Edition appliances.

### -------------------------- Example 2 --------------------------
```
Get-CsHybridPSTNAppliance -SiteName "SeattlePSTN"
```

The command shown in Example 2 returns information for all the Skype for Business Cloud Connector Edition appliances in the given site.

### -------------------------- Example 3 --------------------------
```
Get-CsHybridPSTNAppliance -Name "CCE1"
```

The command shown in Example 3 returns information for the Skype for Business Cloud Connector Edition appliance with the given name.

### -------------------------- Example 4 --------------------------
```
Get-CsHybridPSTNAppliance -SiteName "SeattlePSTN" -Name "CCE1"
```

The command shown in Example 4 returns information for the Skype for Business Cloud Connector Edition appliance in the given site with the given name.


## PARAMETERS

### -Filter
This parameter accepts a wildcard string and returns all hybrid PSTN appliances with identities matching that string. For example, a Filter value of "CCE*" will return all appliances which start with the string "CCE".

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
Specifies the identity of the Skype for Business Cloud Connector Edition appliance.

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
Retrieves the hybrid PSTN appliances from the local replica of the Central Management store, rather than the Central Management store itself.

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

### -Name
Name of Skype for Business Cloud Connector Edition appliance.

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

### -SiteName
Name of Skype for Business Cloud Connector Edition site that the appliance belongs to.

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

## OUTPUTS

## NOTES

## RELATED LINKS
[Set-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/set-cshybridpstnappliance?view=skype-ps)

[Register-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/register-cshybridpstnappliance?view=skype-ps)

[Unregister-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/unregister-cshybridpstnappliance?view=skype-ps)
