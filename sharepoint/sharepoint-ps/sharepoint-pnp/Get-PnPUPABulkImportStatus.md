---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPUPABulkImportStatus

## SYNOPSIS
Get user profile bulk import status.

## SYNTAX 

```powershell
Get-PnPUPABulkImportStatus [-JobId <GuidPipeBind>]
                           [-IncludeErrorDetails [<SwitchParameter>]]
                           [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Retreieve information about the status of submitted user profile bulk upload jobs.

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
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)