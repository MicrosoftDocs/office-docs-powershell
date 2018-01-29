---
external help file: 
applicable: SharePoint Online
title: Remove-SPOMigrationJob
schema: 2.0.0
---

# Remove-SPOMigrationJob

## SYNOPSIS
Cmdlet to remove a previously created migration job from the specified site collection.


## SYNTAX

```
Remove-SPOMigrationJob [-TargetWebUrl] <String> [-JobId] <Guid> -Credentials <CredentialCmdletPipeBind>
 [-NoLogFile] [<CommonParameters>]
```

## DESCRIPTION
Cmdlet to remove a previously created migration job from the specified site collection.


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
Remove-SPOMigrationJob -JobId 4da9e777-3e38-4804-96d9-ddeebe7dfa79 -TargetUrl https://contoso.sharepoint.com/sites/TargetSite
```

This example removes the specified migration job from the site collection “https://contoso.sharepoint.com/sites/TargetSite”.


## PARAMETERS

### -Credentials
Optional credentials of a site collection administrator to use to connect to the site collection. The credentials should supply the username in UPN format (e.g. user@company.onmicrosoft.com). If this property is not set, the current tenant admin credentials from the session’s previous call to `Connect-SPOService` will be used to connect to the site collection.


```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JobId
Id of a previously created migration job that exists on the target site collection.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoLogFile
Indicates to not create a log file. The default is to create a new DeleteMigrationJob log file within the current directory.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetWebUrl
The fully qualified URL of the site collection where the job will be deleted if found.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
