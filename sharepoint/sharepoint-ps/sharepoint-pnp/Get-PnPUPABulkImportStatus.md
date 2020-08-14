---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpupabulkimportstatus
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPUPABulkImportStatus
---

# Get-PnPUPABulkImportStatus

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Get user profile bulk import status.

## SYNTAX 

```powershell
Get-PnPUPABulkImportStatus [-JobId <GuidPipeBind>]
                           [-IncludeErrorDetails [<SwitchParameter>]]
                           [-Connection <PnPConnection>]
```

## DESCRIPTION
Retrieve information about the status of submitted user profile bulk upload jobs.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUPABulkImportStatus
```

This will list the status of all submitted user profile bulk import jobs.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUPABulkImportStatus -IncludeErrorDetails
```

This will list the status of all submitted user profile bulk import jobs, and if it contains an error it will include the error log messages if present.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPUPABulkImportStatus -JobId <guid>
```

This will list the status for the specified import job.

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPUPABulkImportStatus -JobId <guid> -IncludeErrorDetails
```

This will list the status for the specified import job, and if it contains an error it will include the error log messages if present.

## PARAMETERS

### -IncludeErrorDetails
Include error log details

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -JobId
The instance id of the job

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
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