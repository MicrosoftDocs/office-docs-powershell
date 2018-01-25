---
external help file: 
applicable: SharePoint Online
title: Get-SPOTenantSyncClientRestriction
schema: 2.0.0
---

# Get-SPOTenantSyncClientRestriction

## SYNOPSIS
Returns the current configuration status.


## SYNTAX

```
Get-SPOTenantSyncClientRestriction [<CommonParameters>]
```

## DESCRIPTION
You must be a SharePoint Online global administrator to run the cmdlet.

Requires a valid `Connect-SPOService` context to identify the tenant. For information on how to connect to the tenant, see `Connect-SPOService`.

The `Get-SPOTenantSyncClientRestriction` cmdlet returns whether the TenantRestrictionEnabled property is true or false and DomainGUIDs that are currently in the safe recipient list which is represented by the AllowedDomainList property. 

The `Get-SPOTenantSyncClientRestriction` cmdlet also returns the current state of the BlockMacSync parameter.

The `Get-SPOTenantSyncClientRestriction` cmdlet also returns the current state of the GrooveBlockOption parameter.

The `Get-SPOTenantSyncClientRestriction` cmdlet does not have any parameters.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOTenantSyncClientRestriction
```
This example returns a current boolean value of the TenantRestrictionEnabled and BlockMacSync properties and a current set list of domains GUIDs in the AllowedDomainList property.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
