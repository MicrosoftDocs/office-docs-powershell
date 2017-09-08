---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPOAppErrors

## SYNOPSIS
Returns application errors.

## SYNTAX

```
Get-SPOAppErrors [-EndTimeInUtc <DateTime>] -ProductId <Guid> [-StartTimeInUtc <DateTime>]
```

## DESCRIPTION
The Get-SPOAppErrors cmdlet returns application monitoring errors (if available) for the application that is specified by ProductId between StartTimeInUtc in Coordinated Universal Time (UTC) and EndTimeInUtc in UTC.

Based on server configuration, errors are available for a limited time.
The default is seven days.
Older errors are purged.
Date time values that are older than 50 years or later than 20 years from today are considered invalid

Each error includes the error message, time in UTC that error happened, the site where the error happened, and the error type.
Values for error type are as follows: 0 - None, 1 - Install Error, 2 - Upgrade Error, 3 - Runtime Error.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

### (SharePoint Online)
```

```

## PARAMETERS

### -EndTimeInUtc
{{Fill EndTimeInUtc Description}}

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProductId
{{Fill ProductId Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTimeInUtc
{{Fill StartTimeInUtc Description}}

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppInfo]()

[Online Version](http://technet.microsoft.com/EN-US/library/792be457-7ab0-4735-94f9-ae12f2dd20a6(Office.15).aspx)

