---
external help file: 
applicable: SharePoint Online
title: Get-SPOTenantCdnPolicies
schema: 2.0.0
---

# Get-SPOTenantCdnPolicies

## SYNOPSIS
Get the public or private Policies applied on your SharePoint Online Tenant

## SYNTAX

```
Get-SPOTenantCdnPolicies -CdnType <SPOTenantCdnType> [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 
```
Get-SPOTenantCdnPolicies -CdnType Public
```

This example returns public CDN policies of your tenant.

### Example 2 
```
Get-SPOTenantCdnPolicies -CdnType Private
```

This example returns private CDN policies of your tenant.

## PARAMETERS

### -CdnType
Type of CDN on the current SPO Tenant (Public,Private)

```yaml
Type: SPOTenantCdnType
Parameter Sets: (All)
Aliases: 
Accepted values: Public, Private
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Set-SPOTenantCdnEnabled](Set-SPOTenantCdnEnabled.md)

