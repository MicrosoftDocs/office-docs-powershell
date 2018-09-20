---
external help file: 
applicable: SharePoint Online
title: Get-SPOMigrationJobStatus
schema: 2.0.0
---

# Get-SPOMigrationJobStatus

## SYNOPSIS
Cmdlet to monitor the status of a submitted SharePoint Online Migration job.


## SYNTAX

```
Get-SPOMigrationJobStatus -Credentials <CredentialCmdletPipeBind> [-JobId <Guid>] [-NoLogFile]
 -TargetWebUrl <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will check the status of a migration job,


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
$targetWebUrl = "https://contoso.sharepoint.com/sites/migrationtest"
$credentials = Get-Credential
Get-SPOMigrationJobStatus -TargetWebUrl $targetWebUrl -Credentials $credentials -JobId "779c4b3b-ec24-4705-bb58-c38f4329418c"
```

Get the status of your SPO Migration Job. 
You can obtain the Job id when submit package data to create new SPO migration job via the Invoke-SPOMigrationEncryptUploadSubmit cmdlet

## PARAMETERS

### -Credentials
The credentials of a site collection administrator to use to connect to the site collection. The credentials should supply the username in UPN format (e.g. user@company.onmicrosoft.com). If this property is not set, the current tenant admin credentials from the session’s previous call to `Connect-SPOService` will be used to connect to the site collection.


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
(optional) The ID of a migration job that exists on the target site collection.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoLogFile
(optional) Indicates to not create a log file. The default is to create a new DeleteMigrationJob log file within the current directory.


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
The fully qualified target web URL where the package will be imported. This must include the same TargetWebUrl that was used during `ConvertTo-SPOMigrationTargetedPackage`.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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

