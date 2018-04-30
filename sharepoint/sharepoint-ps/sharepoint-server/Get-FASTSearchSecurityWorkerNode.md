---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityWorkerNode
---

# Get-FASTSearchSecurityWorkerNode

## SYNOPSIS
Gets status information about a security worker or workers.

## SYNTAX

```
Get-FASTSearchSecurityWorkerNode [[-Identity] <String>] [-Active] [-Dead] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves the URI and status for a security worker or a group of workers.
A security worker is the Windows service that generates user search security filters.
The cmdlet's function changes depending upon the parameter values:

-- If Identity is specified, the command gets the worker associated with the given URI.

-- If Active is specified, the command gets a list of all active workers.

-- If Dead is specified, the command gets a list of all inactive workers.

-- If none of these parameters are specified, the command returns a list of all workers.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchSecurityWorkerNode -Identity localhost
```

This example gets the status and complete URI for the worker with "localhost" in its URI.

### ---------------EXAMPLE 2-----------------
```
PS C:\>Get-FASTSearchSecurityWorkerNode
```

This example returns a list of all workers, both active and inactive.

## PARAMETERS

### -Identity
The identity of the worker to get.
This is a URI or a partial URI, the server name for example.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Active
If specified, get a list of all active workers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Dead
If specified, get a list of all inactive workers.
A worker is "dead" if it does not respond to requests from the security manager.
This may occur if a worker machine goes down, or if there are network problems.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

