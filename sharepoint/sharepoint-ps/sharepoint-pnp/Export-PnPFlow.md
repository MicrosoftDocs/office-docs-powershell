---
online version: https://pnp.github.io/powershell/cmdlets/Export-PnPFlow.html
Module Name: PnP.PowerShell
external help file: PnP.PowerShell.dll-Help.xml
schema: 2.0.0
---
  
# Export-PnPFlow

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Export-PnPFlow.md to change this file.

Exports the Flow

## SYNTAX

### As ZIP Package
```
Export-PnPFlow -Environment <PowerAutomateEnvironmentPipeBind> -Identity <PowerAutomateFlowPipeBind>
 [-AsZipPackage] [-PackageDisplayName <String>] [-PackageDescription <String>] [-PackageCreatedBy <String>]
 [-PackageSourceEnvironment <String>] [-OutPath <String>] [-Force] [-Connection <PnPConnection>]
 [<CommonParameters>]
```

### As Json
```
Export-PnPFlow -Environment <PowerAutomateEnvironmentPipeBind> -Identity <PowerAutomateFlowPipeBind>
 [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet exports a flow either as a json file or as a zip package.

## EXAMPLES

### Example 1
```powershell
$environment = Get-PnPFlowEnvironment
Export-PnPFlow -Environment $environment -Identity fba63225-baf9-4d76-86a1-1b42c917a182
```

This will export the specified flow as an output to the current output of PowerShell

## PARAMETERS

### -AsZipPackage
If specified the flow will be exported as a zip package

```yaml
Type: SwitchParameter
Parameter Sets: As ZIP Package
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Connection
Optional connection to be used by the cmdlet.
Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Environment
The environment which contains the flow.

```yaml
Type: PowerAutomateEnvironmentPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The name/id of flow or a flow object to export

```yaml
Type: PowerAutomateFlowPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
If specified and the file exported already exists it will be overwritten without confirmation.

```yaml
Type: SwitchParameter
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutPath
Optional file name of the file to export to.

```yaml
Type: String
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageCreatedBy
The name of the person to be used as the creator of the exported package

```yaml
Type: String
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageDescription
The description to use in the exported package

```yaml
Type: String
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageDisplayName
The display name to use in the exported package

```yaml
Type: String
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageSourceEnvironment
The name of the source environment from which the exported package was taken

```yaml
Type: String
Parameter Sets: As ZIP Package
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


