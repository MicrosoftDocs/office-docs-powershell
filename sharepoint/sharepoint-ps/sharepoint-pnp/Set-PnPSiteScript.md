---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpsitescript
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPSiteScript
---

# Set-PnPSiteScript

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Updates an existing Site Script on the current tenant.

## SYNTAX 

```powershell
Set-PnPSiteScript -Identity <TenantSiteScriptPipeBind>
                  [-Title <String>]
                  [-Description <String>]
                  [-Content <String>]
                  [-Version <Int>]
                  [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPSiteScript -Identity f1d55d9b-b116-4f54-bc00-164a51e7e47f -Title "My Site Script"
```

Updates an existing Site Script and changes the title.

### ------------------EXAMPLE 2------------------
```powershell
$script = Get-PnPSiteScript -Identity f1d55d9b-b116-4f54-bc00-164a51e7e47f 
Set-PnPSiteScript -Identity $script -Title "My Site Script"
```

Updates an existing Site Script and changes the title.

## PARAMETERS

### -Content
A JSON string containing the site script

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The description of the site script

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The guid or an object representing the site script

```yaml
Type: TenantSiteScriptPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Title
The title of the site script

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Version
Specifies the version of the site script

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)